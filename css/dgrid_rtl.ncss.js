define(['ninejs/css/style', 'ninejs/config'], function(style, config) {
var result = {path:"Js/prodoctivity/node_modules/dgrid/css/dgrid_rtl.css",children:[]};
result.data = "/* rtl support \n\n\tIMPORTANT:\n\tSafari places the scrollbars on the right even when in RTL mode.\n\t.dgrid-rtl is added to the domNode if the grid's isRTL is true\n\t.dgrid-rtl-swap is also added t" + 
 "o the domNode if isRTL is true and the\n\t\tclient swaps the vertical scrollbar to the left side\n*/\n.dgrid-rtl-swap .dgrid-header-row {\n\tright: 0;\n\tleft: 17px;\n}\n\n.dgrid-rtl-swap .dgrid-heade" + 
 "r-scroll {\n\tleft: 0px;\n\tright: auto;\n}\n\n.dgrid-rtl .dgrid-cell {\n\ttext-align: right;\n}\n\n/* Reverse position of sort arrow */\n.dgrid-rtl .dgrid-sort-arrow {\n\tfloat: left;\n\tmargin: 0 5p" + 
 "x 0 4px;\n}\n\n/* Reverse arrows for tree expando states */\n.dgrid-rtl .ui-icon-triangle-1-e {\n\tbackground-position: -96px -16px;\n}\n.dgrid-rtl .ui-icon-triangle-1-se {\n\tbackground-position: -80" + 
 "px -16px;\n}\n\n/* Reverse Pagination */\n\n.dgrid-rtl .dgrid-pagination .dgrid-status {\n\tfloat: right;\n}\n\n.dgrid-rtl .dgrid-pagination .dgrid-page-size {\n\tfloat: right;\n}\n.dgrid-rtl .dgrid-p" + 
 "agination .dgrid-navigation {\n\tfloat: left;\n}\n\n.dgrid-rtl.dgrid-autoheight .dgrid-header {\n\tleft: 0;\n}\n.has-ie-6 .dgrid-rtl .dgrid-header-row {\n\tleft: auto;\n\tright: auto;\n}\n\n#dgrid-css" + 
 "-dgrid_rtl-loaded { display: none; }"; 
var appUrl = config.ninejs && config.ninejs.applicationUrl;
appUrl = appUrl || config['applicationUrl'];
if (appUrl) { result.path = appUrl + result.path; }

return style.buildStyleObject(result);
});