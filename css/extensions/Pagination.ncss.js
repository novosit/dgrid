define(['ninejs/css/style', 'ninejs/config'], function(style, config) {
var result = {path:"Js/prodoctivity/node_modules/dgrid/css/extensions/Pagination.css",children:[]};
result.data = ".dgrid-status {\r\n\tpadding: 2px;\r\n}\r\n\r\n.dgrid-pagination .dgrid-status {\r\n\tfloat: left;\r\n}\r\n\r\n.dgrid-pagination .dgrid-navigation, .dgrid-pagination .dgrid-page-size {\r\n\tfloat: rig" + 
 "ht;\r\n}\r\n.dgrid-navigation .dgrid-page-link {\r\n\tcursor: pointer;\r\n\tfont-weight: bold;\r\n\ttext-decoration: none;\r\n\tcolor: inherit;\r\n\tpadding: 0 4px;\r\n}\r\n.dgrid-first, .dgrid-last, " + 
 ".dgrid-next, .dgrid-previous {\r\n\tfont-size: 130%;\r\n}\r\n.dgrid-pagination .dgrid-page-disabled,\r\n.has-ie-6-7 .dgrid-navigation .dgrid-page-disabled,\r\n.has-ie.has-quirks .dgrid-navigation .dgr" + 
 "id-page-disabled {\r\n\tcolor: #aaa;\r\n\tcursor: default;\r\n}\r\n.dgrid-page-input {\r\n\tmargin-top: 1px;\r\n\twidth: 2em;\r\n\ttext-align: center;\r\n}\r\n.dgrid-page-size {\r\n\tmargin: 1px 4px 0" + 
 " 4px;\r\n}\r\n\r\n/* indicator of a successful load */\r\n#dgrid-css-extensions-Pagination-loaded { display: none; }"; 
var appUrl = config.ninejs && config.ninejs.applicationUrl;
appUrl = appUrl || config['applicationUrl'];
if (appUrl) { result.path = appUrl + result.path; }

return style.buildStyleObject(result);
});