define(['ninejs/css/style', 'ninejs/config'], function(style, config) {
var result = {path:"Js/prodoctivity/node_modules/dgrid/css/skins/tundra.css",children:[]};
result.data = ".tundra .dgrid {\n\tborder-color: #bba;\n}\n\n.tundra .dgrid-content {\n\tbackground: #fff;\n\tcolor: #000;\n}\n\n.tundra .dgrid-header, .tundra .dgrid-footer {\n\tbackground: #e8e8e8; /* Old browsers" + 
 " */\n\tbackground: -moz-linear-gradient(top, #ffffff 0%, #e8e8e8 100%); /* FF3.6+ */\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#e8e8e8)); /" + 
 "* Chrome,Safari4+ */\n\tbackground: -webkit-linear-gradient(top, #ffffff 0%,#e8e8e8 100%); /* Chrome10+,Safari5.1+ */\n\tbackground: -o-linear-gradient(top, #ffffff 0%,#e8e8e8 100%); /* Opera 11.10+ *" + 
 "/\n\tbackground: -ms-linear-gradient(top, #ffffff 0%,#e8e8e8 100%); /* IE10+ */\n\tbackground: linear-gradient(top, #ffffff 0%,#e8e8e8 100%); /* W3C */\n\tfilter: progid:DXImageTransform.Microsoft.gra" + 
 "dient( startColorstr='#ffffff', endColorstr='#e8e8e8',GradientType=0 ); /* IE6-9 */\n\tfont-weight: bold;\n}\n.tundra .dgrid-header th:hover {\n\tbackground: #f6f6f6; /* Old browsers */\n\tbackground:" + 
 " -moz-linear-gradient(top, #ffffff 0%, #eeeeee 100%); /* FF3.6+ */\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#eeeeee)); /* Chrome,Safari4+ " + 
 "*/\n\tbackground: -webkit-linear-gradient(top, #ffffff 0%,#eeeeee 100%); /* Chrome10+,Safari5.1+ */\n\tbackground: -o-linear-gradient(top, #ffffff 0%,#eeeeee 100%); /* Opera 11.10+ */\n\tbackground: -" + 
 "ms-linear-gradient(top, #ffffff 0%,#eeeeee 100%); /* IE10+ */\n\tbackground: linear-gradient(top, #ffffff 0%,#eeeeee 100%); /* W3C */\n}\n\n.tundra .dgrid-selected {\n\tbackground-color: #aec7e3;\n}\n" + 
 ".tundra .dgrid-row:hover {\n\tbackground-color: #60a1ea;\n}\n\n.tundra .dgrid-highlight {\n\tbackground-color: #ff6;\n}\n\n.tundra .dgrid-cell {\n\tborder-color: #ddc;\n}\n\n.tundra .dgrid-header .dgr" + 
 "id-cell {\n\tborder-color: #bba;\n}"; 
var appUrl = config.ninejs && config.ninejs.applicationUrl;
appUrl = appUrl || config['applicationUrl'];
if (appUrl) { result.path = appUrl + result.path; }

return style.buildStyleObject(result);
});