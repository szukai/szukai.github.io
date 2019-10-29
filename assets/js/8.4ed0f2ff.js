(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{214:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"transforms-and-filters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-and-filters"}},[t._v("#")]),t._v(" Transforms and Filters")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#overview"}},[t._v("Overview")])]),s("li",[s("a",{attrs:{href:"#format"}},[t._v("Format")])]),s("li",[s("a",{attrs:{href:"#transforms-an-example"}},[t._v("Transforms: An Example")])]),s("li",[s("a",{attrs:{href:"#built-in-custom-filters"}},[t._v("Built-in Custom Filters")]),s("ul",[s("li",[s("a",{attrs:{href:"#ref-transform"}},[t._v("ref_transform()")])]),s("li",[s("a",{attrs:{href:"#timestring-to-unix"}},[t._v("timestring_to_unix()")])]),s("li",[s("a",{attrs:{href:"#timestring-to-datetime"}},[t._v("timestring_to_datetime()")])]),s("li",[s("a",{attrs:{href:"#expires-in-to-expiry"}},[t._v("expires_in_to_expiry()")])]),s("li",[s("a",{attrs:{href:"#maybe-get"}},[t._v("maybe_get()")])])])]),s("li",[s("a",{attrs:{href:"#transforms-exceptions"}},[t._v("Transforms Exceptions")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("Kloudless transforms parse or translate object data formats between the service\nendpoint API and the Kloudless platform. A transform definition is essentially\na YAML object with "),s("a",{attrs:{href:"http://jinja.pocoo.org/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jinja2"),s("OutboundLink")],1),t._v(" variable rendering\nutilizing the Jinja2 template engine.")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("Transformation exceptions")]),t._v(" "),s("p",[t._v("There are a few differences between the Kloudless transforms and the\n"),s("a",{attrs:{href:"http://jinja.pocoo.org/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jinja2"),s("OutboundLink")],1),t._v(" template. Please refer to the\n"),s("a",{attrs:{href:"#transforms-exceptions"}},[t._v("exceptions")]),t._v(" below.")])]),t._v(" "),s("h2",{attrs:{id:"format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#format"}},[t._v("#")]),t._v(" Format")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("transforms")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("<type_name>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n        <multi-line template values>")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("Object data formats can be described by mapping types to their Jinja template\nvalues. The template contents will be rendered into a YAML mapping that will be\nthen parsed internally.")]),t._v(" "),s("h2",{attrs:{id:"transforms-an-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-an-example"}},[t._v("#")]),t._v(" Transforms: An Example")]),t._v(" "),s("p",[t._v("Here's an excerpt from the KSpec file from our\n"),s("a",{attrs:{href:"../quickstart/storage"}},[t._v("Storage Quickstart")]),t._v(".")]),t._v(" "),s("p",[t._v("In this example we have the raw file data from Google Drive:")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("raw_file_data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'1CRT3Yv6M2RAaph9OleCwNj*****'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'kind'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'drive#file'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'mimeType'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'application/vnd.google-apps.folder'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'test_create_folder'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("Which needs its attributes converted to the Kloudless unified\n"),s("a",{attrs:{href:"https://developers.kloudless.com/docs/v1/storage#files",target:"_blank",rel:"noopener noreferrer"}},[t._v("File"),s("OutboundLink")],1),t._v(" type format\nbelow:")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("transformed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'1CRT3Yv6M2RAaph9OleCwNj*****'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'test_create_folder'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'mime_type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'application/vnd.google-apps.folder'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'folder'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("The transforms necessary to achieve this would be:")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("transforms")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n      id: {{data.id}}\n      name: {{data.name}}\n      mime_type: {{data.mimeType}}\n      type: {{'folder' if data.mimeType.endswith('folder') else 'file'}}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("Note the use of the "),s("code",[t._v("data")]),t._v(" object from the raw file data. The "),s("code",[t._v("context")]),t._v(" object\nis also available for use as well.")]),t._v(" "),s("p",[t._v("With the python script, the client can call on the "),s("code",[t._v("transform()")]),t._v(" function to\ntransform the following")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("parsed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("raw_file_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'1CRT3Yv6M2RAaph9OleCwNj*****'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'test_create_folder'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'mime_type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'application/vnd.google-apps.folder'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'folder'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"built-in-custom-filters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#built-in-custom-filters"}},[t._v("#")]),t._v(" Built-in Custom Filters")]),t._v(" "),s("p",[t._v("In addition to "),s("a",{attrs:{href:"https://jinja.palletsprojects.com/en/2.10.x/templates/#list-of-builtin-filters",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jinja2's builtin template filters"),s("OutboundLink")],1),t._v(", the following filters are\nalso available for use with the Kloudless Custom Connector.")]),t._v(" "),s("h3",{attrs:{id:"ref-transform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ref-transform"}},[t._v("#")]),t._v(" ref_transform()")]),t._v(" "),s("p",[t._v("Renders a value by using the referenced transformation definition.")]),t._v(" "),s("p",[s("code",[t._v("ref_transform(context, value, transform_name)")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("context")]),t._v(" - Template context")]),t._v(" "),s("li",[s("code",[t._v("value")]),t._v(" - Value to transform")]),t._v(" "),s("li",[s("code",[t._v("transform_name")]),t._v(" - Name of transformation reference.")])]),t._v(" "),s("p",[t._v("Usage example:")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("children")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    data: {{ data.contents|ref_transform('file') }}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    id: {{ data.Id }}\n    name: {{ data.DisplayName }}\n    mime_type: {{ data.Type }}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("In the above example, the "),s("code",[t._v("children")]),t._v(" transforms would pass data['contents']\n(a list) to the "),s("code",[t._v("file")]),t._v(" transforms for parsing.")]),t._v(" "),s("p",[t._v("A special feature about this filter is when given a single object, it will\nproduce the single parsed result; but if given a list, it will produce a list\nof parsed results.")]),t._v(" "),s("p",[t._v("It is possible to use "),s("code",[t._v("ref_transform()")]),t._v(" to contain extra transformations to\navoid having multiple indentation levels.")]),t._v(" "),s("h3",{attrs:{id:"timestring-to-unix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timestring-to-unix"}},[t._v("#")]),t._v(" timestring_to_unix()")]),t._v(" "),s("p",[t._v("Converts a timestring to a\n"),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Unix_time",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unix timestamp"),s("OutboundLink")],1),t._v(" format.")]),t._v(" "),s("p",[s("code",[t._v("timestring_to_unix(value)")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("value")]),t._v(" - Timestring value to convert.")])]),t._v(" "),s("p",[t._v("Usage example:")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" '2019"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("09"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("01T11"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("00Z'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("timestring_to_unix "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("This filter will convert "),s("code",[t._v("2019-09-01T11:00Z")]),t._v(" to "),s("code",[t._v("1567335600.0")]),t._v(".")]),t._v(" "),s("p",[t._v("Some services' API will return time information i.e. "),s("code",[t._v("created")]),t._v(" or "),s("code",[t._v("last_updated")]),t._v("\nwith a ISO-8601 timestring. The Kloudless platform however, accepts time\ninformation in Unix timestamp format. This filter can assist in converting the\ntime information if needed.")]),t._v(" "),s("h3",{attrs:{id:"timestring-to-datetime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timestring-to-datetime"}},[t._v("#")]),t._v(" timestring_to_datetime()")]),t._v(" "),s("p",[t._v("Converts a timestring to a datetime format.")]),t._v(" "),s("p",[s("code",[t._v("timestring_to_datetime(value)")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("value")]),t._v(" - Timestring value to convert.")])]),t._v(" "),s("p",[t._v("Usage example:")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" '2019"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("09"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("01T11"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("00Z'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("timestring_to_datetime "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("This filter will convert "),s("code",[t._v("2019-09-01T11:00Z")]),t._v(" to a datetime object\n"),s("code",[t._v("datetime(2019, 9, 1, 11, 0)")]),t._v(".")]),t._v(" "),s("p",[t._v("While the Kloudless platform generally accepts the Unix timestamp format. There\nare a few properties that use "),s("code",[t._v("datetime")]),t._v(" instead. e.x. "),s("code",[t._v("event_time")]),t._v(" for events\nobjects, or "),s("code",[t._v("expiry")]),t._v(" in the notification_settings object.")]),t._v(" "),s("h3",{attrs:{id:"expires-in-to-expiry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expires-in-to-expiry"}},[t._v("#")]),t._v(" expires_in_to_expiry()")]),t._v(" "),s("p",[t._v('Adds the input seconds value with current Unix timestamp. This function can be\nuseful for converting "expires_in" value in access token response to the\nabsolute expiration timestamp ("expires_at").')]),t._v(" "),s("p",[s("code",[t._v("expires_in_to_expiry(value)")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("value")]),t._v(" - Unix timestamp value to convert.")])]),t._v(" "),s("p",[t._v("Usage example:")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" 3600"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("expires_in_to_expiry "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("In the example above, if the current timestamp is "),s("code",[t._v("1568171093.542906")]),t._v(", then\nthe filter will return the timestamp value of "),s("code",[t._v("1568174693.542906")]),t._v(".")]),t._v(" "),s("p",[t._v("This filter will most likely be useful in access token parsing. Some access\ntoken responses provide expire time in "),s("code",[t._v("expires_in")]),t._v(", while some others provide\nthe information as "),s("code",[t._v("expires_at")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"maybe-get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maybe-get"}},[t._v("#")]),t._v(" maybe_get()")]),t._v(" "),s("p",[t._v("Similar to Python dictionary's "),s("code",[t._v("get()")]),t._v(", "),s("code",[t._v("maybe_get()")]),t._v(" will retrieve a value from\na dictionary key, but will get the multi-level nested value in the\ndictionary object, or return a default value if the key/value is otherwise\nabsent.")]),t._v(" "),s("p",[s("code",[t._v("maybe_get(value, *path, **kwargs)")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("value")]),t._v(" - Value to retrieve")]),t._v(" "),s("li",[s("code",[t._v("path")]),t._v(", "),s("code",[t._v("kwargs")]),t._v(" - Dictionary key values to get. i.e. 'result', 'object'")])]),t._v(" "),s("p",[t._v("Usage example:")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("maybe_get('prop1'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inner_key'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" default='default value') "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Given the following dictionary:")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prop1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inner_key'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'target value'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("The result in the example will yield "),s("code",[t._v("target value")]),t._v(". If the definition of the\n"),s("code",[t._v("data")]),t._v(" dictionary is changed and any of the keys are different or not found, then\n"),s("code",[t._v("default value")]),t._v(" would be returned instead.")]),t._v(" "),s("h2",{attrs:{id:"transforms-exceptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-exceptions"}},[t._v("#")]),t._v(" Transforms Exceptions")]),t._v(" "),s("p",[t._v("There are a few differences between the Kloudless transforms and the\n"),s("a",{attrs:{href:"http://jinja.pocoo.org/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jinja2"),s("OutboundLink")],1),t._v(" template behavior. Certain patterns will\nnot work.")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("Don't:")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("account_info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    account: {{data.user_id}}@{{data.domain}}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("This in some situations may cause result like below and then YAML parsing error.\naccount: ‘123456’@’something.com'")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Do:")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("account_info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    account: {{'%s@%s' % (data.user_id, data.domain)}}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("KSpec transforms will facilitate the necessary YAML escapes when rendering.\nE.g.")]),t._v(" "),s("ul",[s("li",[t._v("'abc' -> abc;")]),t._v(" "),s("li",[t._v('"I\'m a sentence." -> "I\'m a sentence";')]),t._v(" "),s("li",[t._v('"frank\'s friend said: "okay..."." -> \'frank\'\'s friend said: "okay...".\' .')])])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("Don't:")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("folder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    name: '{{data.Name}}'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("KSpec transforms' internal mechanism will handle string quotations\nif needed. Extra/Manual quotes may break the transformation.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Do:")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("folder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    name: {{data.Name}}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("Kspec transforms will handle numeric strings as well.\nE.g.")]),t._v(" "),s("ul",[s("li",[t._v("{“Name”: “123”} -> name: ‘123’")]),t._v(" "),s("li",[t._v("{“Name”: 123} -> name: 123")])])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("Don't:")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    metadata: {{data|ref_transform(‘event_meta’)}}\n        extra_prop: {{data.something}}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("code",[t._v("extra_prop")]),t._v(" above will cause an YAML parsing error. Try to avoid having\nmultiple levels of indentation as the KSpec transforms' internal mechanism\nrenders in flow style formatting, which will conflict with the block style\nformatting shown above.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Do:")]),t._v(" "),s("p",[t._v("In the event that additional variables are required (above), utilize\nthe following method instead:")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    {% set parsed = data|ref_transform(‘event_meta’) %}\n    {% set tmp = parsed.__setitem__(‘extra_prop’, data.something) %}\n    metadata: {{parsed}}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Do:")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("ref_transform(‘ev_meta’)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("To render the result as an YAML list with a single item.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Do:")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" %s % data.value "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data.value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("string "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("To enforce a string type result.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);