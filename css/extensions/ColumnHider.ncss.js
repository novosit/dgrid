define(['ninejs/css/style', 'ninejs/config'], function(style, config) {
var result = {path:"Js/prodoctivity/node_modules/dgrid/css/extensions/ColumnHider.css",children:[]};
result.data = ".dgrid-hider-toggle {\n\tbackground-position: 0 -192px;\n\tbackground-color: transparent;\n\tborder: none;\n\tcursor: pointer;\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n}\n\n.dgrid-rtl-swap .dgr" + 
 "id-hider-toggle {\n\tright: auto;\n\tleft: 0;\n}\n\n.dgrid-hider-menu {\n\tposition: absolute;\n\ttop: 0;\n\tright: 17px;\n\twidth: 184px;\n\tbackground-color: #fff;\n\tborder: 1px solid black;\n\tz-i" + 
 "ndex: 99999;\n\tpadding: 4px;\n\toverflow-x: hidden;\n\toverflow-y: auto;\n}\n\n.dgrid-rtl-swap .dgrid-hider-menu {\n\tright: auto;\n\tleft: 17px;\n}\n\n.dgrid-hider-menu-row {\n\tposition: relative;\n" + 
 "\tpadding: 2px;\n}\n.dgrid-hider-menu-check {\n\tposition: absolute;\n\ttop: 2px;\n\tleft: 2px;\n\tpadding: 0;\n}\n.dgrid-hider-menu-label {\n\tdisplay: block;\n\tpadding-left: 20px;\n}\n\nhtml.has-qu" + 
 "irks .dgrid-hider-menu-check,\nhtml.has-ie-6-7 .dgrid-hider-menu-check {\n\t/* IE < 8 seems to ignore padding: 0, so counteract */\n\ttop: 0;\n\tleft: 0;\n}\n\n#dgrid-css-extensions-ColumnHider-loaded" + 
 " {\n\tdisplay: none;\n}\n"; 
var appUrl = config.ninejs && config.ninejs.applicationUrl;
appUrl = appUrl || config['applicationUrl'];
if (appUrl) { result.path = appUrl + result.path; }

return style.buildStyleObject(result);
});