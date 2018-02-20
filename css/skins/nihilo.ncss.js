define(['ninejs/css/style', 'ninejs/config'], function(style, config) {
var result = {path:"Js/prodoctivity/node_modules/dgrid/css/skins/nihilo.css",children:[]};
result.data = ".nihilo .dgrid {\n\tborder-color: #bba;\n}\n\n.nihilo .dgrid-content {\n\tbackground: #fff;\n\tcolor: #000;\n}\n.nihilo .dgrid-header {\n\tbackground: #fff;\n\tborder-bottom-color: #919191;\n}\n.nihil" + 
 "o .dgrid-footer {\n\tbackground: #fff;\n\tborder-top: 1px solid #919191;\n}\n.nihilo .dgrid-header .dgrid-cell {\n\tborder-right-color: #acab99;\n}\n\n.nihilo .dgrid-selected {\n\tbackground-color: #a" + 
 "ec7e3;\n}\n.nihilo .dgrid-row:hover {\n\tbackground-color: #ffe284;\n}\n\n.nihilo .dgrid-highlight {\n\tbackground-color: #ff6;\n}\n\n.nihilo .dgrid-cell {\n\tborder-color: #ddc;\n}\n\n.nihilo .dgrid-" + 
 "header .dgrid-cell {\n\tborder-color: #bba;\n}"; 
var appUrl = config.ninejs && config.ninejs.applicationUrl;
appUrl = appUrl || config['applicationUrl'];
if (appUrl) { result.path = appUrl + result.path; }

return style.buildStyleObject(result);
});