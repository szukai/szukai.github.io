from kloudless_connector import Connector
from kloudless_connector.exceptions import BadRequest
import mimetypes


connector = Connector()


@connector.register("auth.account_id.read")
def account_info(client, request_data, prop):
    response = client.make_request('get_self', params={'fields': 'user'})
    email = response.json()['user']['emailAddress']
    return {
        'account_id': email,
        'account_name': email,
    }


@connector.register("storage.folders.list")
def folder_contents(client, request_data, prop):
    parent_id = request_data['id']
    recursive = request_data['recursive']
    ordering = request_data['ordering']
    page_size = request_data['page_size']
    page = request_data['page']

    parent_id = 'root' if parent_id == '/' else parent_id
    page_size = max(min(page_size, 1000), 1)
    page = None if page == 1 else page
    ordering = ','.join(ordering)

    if recursive and parent_id != 'root':
        raise BadRequest('Recursive is only available in root folder.')

    if parent_id == 'trash':
        query = 'trashed = true'
    else:
        query = 'trashed = false'
        if parent_id == 'root' and recursive:
            pass
        elif parent_id == 'shared':
            query += ' and sharedWithMe = true'
        else:
            query += ' and \'%s\' in parents' % parent_id

    parent_meta = get_meta(client, {'id': parent_id}, '')
    extra_context = {'parent': parent_meta['data']}

    params = {
        'q': query,
        'pageSize': page_size,
        'orderBy': ordering,
    }
    if page:
        params['pageToken'] = page

    response = client.make_request('search_files', params=params)
    response_dict = response.json()

    next_page = response_dict.get('nextPageToken')
    children = client.transform(
        'file', data=response_dict['files'], interface_context=extra_context
    )
    return {
        'data': children or [],
        'next_page': next_page,
    }


@connector.register("storage.*.read")
def get_meta(client, request_data, prop):
    file_id = request_data['id']

    if file_id == 'shared':
        response_dict = {
            'id': file_id,
            'name': 'Shared',
            'mimeType': 'application/vnd.google-apps.folder',
        }
    elif file_id == 'team_drives':
        response_dict = {
            'id': file_id,
            'name': 'Team Drives',
            'mimeType': 'application/vnd.google-apps.folder',
        }
    elif file_id == 'trash':
        response_dict = {
            'id': file_id,
            'name': 'Trash',
            'mimeType': 'application/vnd.google-apps.folder',
        }
    else:
        response = client.make_request('get_file', params={'fileId': file_id})
        response_dict = response.json()

    metadata = client.transform('file', data=response_dict)
    return {
        'data': metadata,
    }


@connector.register('storage.*.delete')
def delete(client, request_data, prop):
    file_id = request_data['id']
    permanent = request_data['permanent']

    if file_id in ('/', 'team_drives', 'shared', 'trash'):
        raise BadRequest('Cannot delete this folder.')

    if not permanent:
        operation_id = 'update_file'
        params = {
            'fileId': file_id,
            'uploadType': 'multipart',
            'body': {
                'trashed': True,
            },
        }
    else:
        operation_id = 'delete_file'
        params = {'fileId': file_id}

    response = client.make_request(operation_id, params=params)
    return {'success': True}


@connector.register('storage.files.create')
def upload_info(client, request_data, prop):
    """
    Google's multipart upload requires specific content order. Which
    is not supported by our platform. So work around it by creating
    the file with metadata first, then update its content.
    """
    name = request_data['name'] or ''
    parent_id = request_data['parent_id']

    name = name.decode('utf-8')
    parent_id = 'root' if parent_id == '/' else parent_id

    mime_type, _ = mimetypes.guess_type(name)
    params = {
        'body': {
            'name': name,
            'parents': [parent_id],
            'mimeType': mime_type,
        },
    }
    response = client.make_request('create_file', params=params)
    file_id = response.json()['id']

    update_params = {
        'uploadType': 'media',
        'fileId': file_id,
        'body': {},
    }
    op_info = client.operation_info(
        'update_file', params=update_params,
        url_replace={'path': '/upload/drive/v3/files/%s' % file_id}
    )
    del op_info['headers']['Content-Type']
    return {
        'url': op_info['url'],
        'headers': op_info['headers'],
        'method': op_info['method'],
    }


@connector.register('storage.files.create.metadata')
def metadata_after_upload(client, response, prop):
    metadata = client.transform('file', data=response.json())
    return {
        'data': metadata,
    }
