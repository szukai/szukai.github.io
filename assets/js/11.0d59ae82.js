(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{209:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("p",[e._v("Each service connected to Kloudless has properties to describe what capabilities\nand requirements it has. The properties defined below are also used to register\nthe script's connector functions to the appropriate endpoint to facilitate the\nservice's behavior. These endpoints can be found in the\n"),a("a",{attrs:{href:"https://developers.kloudless.com/docs/v1/core",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kloudless Developer Documentation"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Currently the Custom Connector only supports certain APIs by category:")]),e._v(" "),a("ul",[a("li",[e._v("Storage")]),e._v(" "),a("li",[e._v("CRM")])]),e._v(" "),a("p",[e._v("Properties can be in one of three categories: capabilities, requirements or\nconfiguration.")]),e._v(" "),a("h2",{attrs:{id:"authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),a("h3",{attrs:{id:"capabilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#capabilities"}},[e._v("#")]),e._v(" Capabilities")]),e._v(" "),a("h4",{attrs:{id:"auth-account-id-read"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auth-account-id-read"}},[e._v("#")]),e._v(" auth.account_id.read")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Description: Whether the service supports reading account information.")])]),e._v(" "),a("li",[a("p",[e._v("Function: The registered function will be called after authentication.\nIn OAuth2, that would be right after access token is retrieved. In basic auth,\nit would be after the username and password are received from pre-auth form.")]),e._v(" "),a("p",[e._v("For example, in oauth2, the request_data would always be empty {} here; in basic, request_data would be the pre-auth form values: {'username': 'example@example.com', 'password': 'dfk9D{jkl4'}.")])])]),e._v(" "),a("h2",{attrs:{id:"storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[e._v("#")]),e._v(" Storage")]),e._v(" "),a("h3",{attrs:{id:"capabilities-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#capabilities-2"}},[e._v("#")]),e._v(" Capabilities")]),e._v(" "),a("h4",{attrs:{id:"storage-files-copy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-files-copy"}},[e._v("#")]),e._v(" storage.files.copy")]),e._v(" "),a("ul",[a("li",[e._v("Description: Whether the service supports copying files.")]),e._v(" "),a("li",[e._v('Function: Called when the "Copy a File" endpoint is called to create a new\nfile in the Storage API.')])]),e._v(" "),a("h4",{attrs:{id:"storage-files-content-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-files-content-update"}},[e._v("#")]),e._v(" storage.files.content.update")]),e._v(" "),a("ul",[a("li",[e._v("Description: Whether the service supports updating file contents.")]),e._v(" "),a("li",[e._v("Function:")])]),e._v(" "),a("h4",{attrs:{id:"storage-files-create"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-files-create"}},[e._v("#")]),e._v(" storage.files.create")]),e._v(" "),a("ul",[a("li",[e._v("Description: Whether the service supports creating files")]),e._v(" "),a("li",[e._v('Function: Called when the "Upload a File" endpoint is called to create a new\nfile in the Storage API.')])]),e._v(" "),a("h4",{attrs:{id:"storage-files-create-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-files-create-metadata"}},[e._v("#")]),e._v(" storage.files.create.metadata")]),e._v(" "),a("ul",[a("li",[e._v("Description: Whether the service supports returning the upload response metadata.")]),e._v(" "),a("li",[e._v('Function: Called after the "Upload a File" endpoint is called to get the\nnew/uploaded file\'s metadata.')])]),e._v(" "),a("h4",{attrs:{id:"storage-files-delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-files-delete"}},[e._v("#")]),e._v(" storage.files.delete")]),e._v(" "),a("ul",[a("li",[e._v("Description: Whether the service supports deleting files.")]),e._v(" "),a("li",[e._v('Function: Called when the "Delete a File" endpoint is called to delete a\nfile in the Storage API.')])]),e._v(" "),a("h4",{attrs:{id:"storage-files-download"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-files-download"}},[e._v("#")]),e._v(" storage.files.download")]),e._v(" "),a("ul",[a("li",[e._v("Description: Whether the service supports downloading file contents.")]),e._v(" "),a("li",[e._v('Function: Called when the "Download a File" endpoint is called to download a\nfile in the Storage API.')])]),e._v(" "),a("h4",{attrs:{id:"storage-files-thumbnail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-files-thumbnail"}},[e._v("#")]),e._v(" storage.files.thumbnail")]),e._v(" "),a("ul",[a("li",[e._v("Description: Whether the service supports reading file thumbnail data.")]),e._v(" "),a("li",[e._v("Function: Called when the \"Download a File's Thumbnail\" endpoint is called\nto download a file's thumbnail data in the Storage API.")])]),e._v(" "),a("h4",{attrs:{id:"storage-files-read"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-files-read"}},[e._v("#")]),e._v(" storage.files.read")]),e._v(" "),a("ul",[a("li",[e._v("Description: Whether the service supports reading file metadata.")]),e._v(" "),a("li",[e._v("Function: Called when the \"Retrieve a File's Metadata\" endpoint is called\nto download a file's metadata in the Storage API.")])]),e._v(" "),a("h4",{attrs:{id:"storage-files-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-files-update"}},[e._v("#")]),e._v(" storage.files.update")]),e._v(" "),a("ul",[a("li",[e._v("Description: Whether the service supports updating file metadata.")]),e._v(" "),a("li",[e._v("Function: Called when the \"Update a File's Metadata\" endpoint is called\nto update a file's metadata in the Storage API.")])]),e._v(" "),a("h4",{attrs:{id:"storage-folders-copy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-folders-copy"}},[e._v("#")]),e._v(" storage.folders.copy")]),e._v(" "),a("ul",[a("li",[e._v("Description: Whether the service supports copying folders.")]),e._v(" "),a("li",[e._v('Function: Called when the "Create a Folder" endpoint is called to create a new\nfolder in the Storage API.')])]),e._v(" "),a("h4",{attrs:{id:"storage-folders-create"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-folders-create"}},[e._v("#")]),e._v(" storage.folders.create")]),e._v(" "),a("ul",[a("li",[e._v("Description: Whether the service supports creating new folders.")]),e._v(" "),a("li",[e._v('Function: Called when the "Create a Folder" endpoint is called to create a new\nfolder in the Storage API.')])]),e._v(" "),a("h4",{attrs:{id:"storage-folders-delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-folders-delete"}},[e._v("#")]),e._v(" storage.folders.delete")]),e._v(" "),a("ul",[a("li",[e._v("Description: Whether the service supports deleting folders.")]),e._v(" "),a("li",[e._v('Function: Called when the "Delete a Folder" endpoint is called to delete a\nfolder in the Storage API.')])]),e._v(" "),a("h4",{attrs:{id:"storage-folders-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-folders-list"}},[e._v("#")]),e._v(" storage.folders.list")]),e._v(" "),a("ul",[a("li",[e._v("Description: Whether the service supports listing folders and folders\ncontents.")]),e._v(" "),a("li",[e._v('Function: Called when the "Retrieve Folder Contents" endpoint is called to\nlist a folder\'s contents in the Storage API.')])]),e._v(" "),a("h4",{attrs:{id:"storage-folders-read"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-folders-read"}},[e._v("#")]),e._v(" storage.folders.read")]),e._v(" "),a("ul",[a("li",[e._v("Description: Whether the service supports reading folder metadata.")]),e._v(" "),a("li",[e._v('Function: Called when the "Retrieve Folder Metadata" endpoint is called to\ndownload a folder\'s metadata in the Storage API.')])]),e._v(" "),a("h4",{attrs:{id:"storage-folders-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-folders-update"}},[e._v("#")]),e._v(" storage.folders.update")]),e._v(" "),a("ul",[a("li",[e._v("Description: Whether the service supports updating folder metadata.")]),e._v(" "),a("li",[e._v('Function: Called when the "Update Folder Metadata" endpoint is called to\nupdate a folder\'s metadata in the Storage API.')])]),e._v(" "),a("h4",{attrs:{id:"storage-links-create-native"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-links-create-native"}},[e._v("#")]),e._v(" storage.links.create.native")]),e._v(" "),a("ul",[a("li",[e._v("Description: Whether the service supports creating native links to files or\nfolders.")]),e._v(" "),a("li",[e._v('Function: Called when the "Create a Link" endpoint is called to create a new\nlink in the Storage API.')])]),e._v(" "),a("h4",{attrs:{id:"storage-search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-search"}},[e._v("#")]),e._v(" storage.search")]),e._v(" "),a("ul",[a("li",[e._v("Description: Whether the service supports searching in its storage API.")]),e._v(" "),a("li",[e._v('Function: Called when the "Search" endpoint is called to create a new\nlink in the Storage API.')])]),e._v(" "),a("h2",{attrs:{id:"crm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crm"}},[e._v("#")]),e._v(" CRM")]),e._v(" "),a("p",[e._v("Coming soon")])])}),[],!1,null,null,null);t.default=s.exports}}]);