define(['ninejs/css/style', 'ninejs/config'], function(style, config) {
var result = {path:"Js/prodoctivity/node_modules/dgrid/css/extensions/CompoundColumns.css",children:[]};
result.data = ".dgrid-spacer-row {\n\theight: 0;\n}\n\n.dgrid-spacer-row th { /* Need to make these cells zero height/invisible, but still force the table layout */\n\tpadding-top: 0;\n\tpadding-bottom: 0;\n\tborder" + 
 "-top: none;\n\tborder-bottom: none;\n}\n\n#dgrid-css-extensions-CompoundColumns-loaded { display: none; }"; 
var appUrl = config.ninejs && config.ninejs.applicationUrl;
appUrl = appUrl || config['applicationUrl'];
if (appUrl) { result.path = appUrl + result.path; }

return style.buildStyleObject(result);
});