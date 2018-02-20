define(['ninejs/css/style', 'ninejs/config'], function(style, config) {
var result = {path:"Js/prodoctivity/node_modules/dgrid/css/skins/soria.css",children:[]};
result.data = ".soria .dgrid {\n\tborder-color: #bba;\n}\n\n.soria .dgrid-content {\n\tbackground: #fff;\n\tcolor: #000;\n}\n.soria .dgrid-header,\n.soria .dgrid-footer {\n\tbackground: #f2f4fe; /* Old browsers */\n" + 
 "\tbackground: -moz-linear-gradient(top, #f2f4fe 0%, #d0dff5 50%, #c6d8f0 51%, #c2d5ef 100%); /* FF3.6+ */\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f2f4fe), color-s" + 
 "top(50%,#d0dff5), color-stop(51%,#c6d8f0), color-stop(100%,#c2d5ef)); /* Chrome,Safari4+ */\n\tbackground: -webkit-linear-gradient(top, #f2f4fe 0%,#d0dff5 50%,#c6d8f0 51%,#c2d5ef 100%); /* Chrome10+,S" + 
 "afari5.1+ */\n\tbackground: -o-linear-gradient(top, #f2f4fe 0%,#d0dff5 50%,#c6d8f0 51%,#c2d5ef 100%); /* Opera 11.10+ */\n\tbackground: -ms-linear-gradient(top, #f2f4fe 0%,#d0dff5 50%,#c6d8f0 51%,#c2d" + 
 "5ef 100%); /* IE10+ */\n\tbackground: linear-gradient(top, #f2f4fe 0%,#d0dff5 50%,#c6d8f0 51%,#c2d5ef 100%); /* W3C */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2f4fe', e" + 
 "ndColorstr='#c2d5ef',GradientType=0 ); /* IE6-9 */\n}\n.soria .dgrid-header th:hover {\n\tbackground: #d4deec; /* Old browsers */\n\tbackground: -moz-linear-gradient(top, #dae2ed 0%, #b2c7e8 49%, #a8c" + 
 "1eb 50%, #9ebaec 100%); /* FF3.6+ */\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#dae2ed), color-stop(49%,#b2c7e8), color-stop(50%,#a8c1eb), color-stop(100%,#9ebaec));" + 
 " /* Chrome,Safari4+ */\n\tbackground: -webkit-linear-gradient(top, #dae2ed 0%,#b2c7e8 49%,#a8c1eb 50%,#9ebaec 100%); /* Chrome10+,Safari5.1+ */\n\tbackground: -o-linear-gradient(top, #dae2ed 0%,#b2c7e" + 
 "8 49%,#a8c1eb 50%,#9ebaec 100%); /* Opera 11.10+ */\n\tbackground: -ms-linear-gradient(top, #dae2ed 0%,#b2c7e8 49%,#a8c1eb 50%,#9ebaec 100%); /* IE10+ */\n\tbackground: linear-gradient(top, #dae2ed 0%" + 
 ",#b2c7e8 49%,#a8c1eb 50%,#9ebaec 100%); /* W3C */\n}\n\n.soria .dgrid-selected {\n\tbackground-color: #aec7e3;\n}\n.soria .dgrid-row:hover {\n\tbackground-color: #60a1ea;\n}\n\n.soria .dgrid-highlight" + 
 " {\n\tbackground-color: #ff6;\n}\n\n.soria .dgrid-cell {\n\tborder-color: #ddc;\n}\n\n.soria .dgrid-header .dgrid-cell {\n\tborder-color: #bba;\n}"; 
var appUrl = config.ninejs && config.ninejs.applicationUrl;
appUrl = appUrl || config['applicationUrl'];
if (appUrl) { result.path = appUrl + result.path; }

return style.buildStyleObject(result);
});