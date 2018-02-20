define(['ninejs/css/style', 'ninejs/config'], function(style, config) {
var result = {path:"Js/prodoctivity/node_modules/dgrid/css/extensions/ColumnReorder.css",children:[]};
result.data = ".dgrid-header .dgrid-cell {\r\n\tdisplay: table-cell; /* override any spurious dojoDndItem settings elsewhere */\r\n}\r\n\r\n.dgrid-header .dojoDndItemBefore {\r\n\tborder-left: 2px dotted #000 !impor" + 
 "tant;\r\n}\r\n.dgrid-header .dojoDndItemAfter {\r\n\tborder-right: 2px dotted #000 !important;\r\n}\r\n\r\n#dgrid-css-extensions-ColumnReorder-loaded { /* load indicator for xstyle */\r\n\tdisplay: no" + 
 "ne;\r\n}\r\n"; 
var appUrl = config.ninejs && config.ninejs.applicationUrl;
appUrl = appUrl || config['applicationUrl'];
if (appUrl) { result.path = appUrl + result.path; }

return style.buildStyleObject(result);
});