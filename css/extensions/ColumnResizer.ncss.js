define(['ninejs/css/style', 'ninejs/config'], function(style, config) {
var result = {path:"Js/prodoctivity/node_modules/dgrid/css/extensions/ColumnResizer.css",children:[]};
result.data = ".dgrid-column-resizer {\n\tposition: absolute;\n\twidth: 2px;\n\tbackground-color: #666;\n\tz-index: 1000;\n}\n\n.dgrid-resize-handle {\n\theight: 100px;\n\twidth: 0;\n\tposition: absolute;\n\tright: " + 
 "-4px;\n\ttop:-4px;\n\tcursor: col-resize;\n\tz-index: 999;\n\tborder-left: 5px solid transparent;\n\toutline: none;\n}\nhtml.has-ie-6 .dgrid-resize-handle {\n\tborder-color: pink;\n\tfilter: chroma(co" + 
 "lor=pink);\n}\nhtml.has-mozilla .dgrid .dgrid-resize-handle:focus,\nhtml.has-opera .dgrid .dgrid-resize-handle:focus {\n\t/* Override focus outline style set in dgrid.css */\n\toutline: none;\n}\n\n.d" + 
 "grid-resize-header-container {\n\theight:100%;\n}\n\n/* make the resize handles larger on touch-capable devices */\nhtml.has-touch .dgrid-resize-handle {\n\tborder-left: 20px solid transparent;\n}\nht" + 
 "ml.has-touch .dgrid-column-resizer {\n\twidth: 2px;\n}\n\nhtml.has-no-quirks .dgrid-resize-header-container {\n\t/* set to relative so we can do the resizing against this node...\n\t\texcept when in q" + 
 "uirks mode, where we have to use the th */\n\tposition: relative;\n}\nhtml.has-ie-6 .dgrid-resize-header-container {\n\tposition: static; /* and in IE6 we have to do the th hack */\n} \n.dgrid-header " + 
 ".dgrid-cell-padding {\n\toverflow: hidden;\n}\nhtml.has-ie-6 .dgrid-header .dgrid-cell-padding {\n\tmargin-right: 4px; /* for IE6, keep the resizer visible */\n}\nhtml.has-ie-6 .dgrid-header .dgrid-so" + 
 "rt-arrow {\n    margin-right: 0; /* for IE6, zero out the right margin due to the right margin for the container */\n}\nhtml.has-quirks .dgrid-header .dgrid-cell-padding, html.has-ie-6 .dgrid-header ." + 
 "dgrid-cell {\n\tposition:relative;\n}\n\n#dgrid-css-extensions-ColumnResizer-loaded {\n\tdisplay: none;\n}\n"; 
var appUrl = config.ninejs && config.ninejs.applicationUrl;
appUrl = appUrl || config['applicationUrl'];
if (appUrl) { result.path = appUrl + result.path; }

return style.buildStyleObject(result);
});