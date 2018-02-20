define(['ninejs/css/style', 'ninejs/config'], function(style, config) {
var result = {path:"Js/prodoctivity/node_modules/dgrid/css/columnset.css",children:[]};
result.data = ".dgrid-column-set {\n\toverflow: hidden;\n\twidth: 100%;\n\tposition: relative; /* This is needed because we setting position: relative on cells in the grid for focus in IE7*/\n\theight: 100%;\n}\n\n." + 
 "dgrid-column-set-cell {\n\tvertical-align: top;\n\theight: 100%;\n}\n.dgrid-column-set-scroller {\n\tposition: absolute;\n\tbottom: 0px;\n\toverflow-x: auto;\n\toverflow-y: hidden;\n}\n.dgrid-column-s" + 
 "et-scroller-content {\n\tposition: relative;\n\theight: 1px;\n}\n\n/* UA-specific hacks*/\nhtml.has-mozilla .dgrid-column-set *:focus, html.has-safari .dgrid-column-set *:focus {\n\t/* firefox and ope" + 
 "ra's outline gets cropped by the overflow: hidden, so we add a border*/\n\tborder: 1px dotted black; \n\toutline: 1px dotted black;\n}\nhtml.has-ie-7 .dgrid-column-set {\n\t/* in IE7 (strangely not IE" + 
 "6 or IE8+) this is needed instead of 100% to make it not create a horizontal scroll bar*/\n\twidth: auto;\n}\n\nhtml.has-quirks .dgrid-column-set {\n\t/* at it works in quirks even in IE7*/\n\twidth: " + 
 "100%;\n}\n\n/* indicator of a successful load */\n#dgrid-css-columnset-loaded {\n\tdisplay: none;\n}"; 
var appUrl = config.ninejs && config.ninejs.applicationUrl;
appUrl = appUrl || config['applicationUrl'];
if (appUrl) { result.path = appUrl + result.path; }

return style.buildStyleObject(result);
});