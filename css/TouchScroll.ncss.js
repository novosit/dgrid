define(['ninejs/css/style', 'ninejs/config'], function(style, config) {
var result = {path:"Js/prodoctivity/node_modules/dgrid/css/TouchScroll.css",children:[]};
result.data = "/* styles for scrollbars during touch-scroll */\n\n.touchscroll-x, .touchscroll-y {\n\tdisplay: none; /* overridden below */\n\toverflow: hidden; /* cut off ends of scrollbar during rubber-banding */\n" + 
 "\tposition: absolute;\n\t/* establish base style for scrollbar fade-in/out */\n\topacity: 0.7;\n}\n.touchscroll-fadeout .touchscroll-x, .touchscroll-fadeout .touchscroll-y {\n\topacity: 0;\n\t-webkit-" + 
 "transition: opacity 0.3s ease-out 0.1s;\n\t-moz-transition: opacity 0.3s ease-out 0.1s;\n\t-o-transition: opacity 0.3s ease-out 0.1s;\n\ttransition: opacity 0.3s ease-out 0.1s;\n}\n\n.touchscroll-bar " + 
 "{\n\tbackground-color: rgba(88,88,88,0.97);\n\tborder: 1px solid rgba(88,88,88,1);\n\tborder-radius: 3px;\n\t\n\t/* the borders aren't anti-aliased on Android, so this smooths it out a bit */\n\t-webk" + 
 "it-box-shadow: 0 0 1px rgba(88,88,88,0.4);\n}\n\n.touchscroll-x {\n\tleft: 1px;\n\tright: 3px;\n\tbottom: 1px;\n\theight: 5px;\n}\n.touchscroll-y {\n\ttop: 1px;\n\tbottom: 3px;\n\tright: 1px;\n\twidth" + 
 ": 5px;\n}\n\n.touchscroll-scrollable-x .touchscroll-x, .touchscroll-scrollable-y .touchscroll-y {\n\tdisplay: block; /* display scrollbar when appropriate */\n}\n\n.touchscroll-bar {\n\t/* Establish t" + 
 "ransition property and timing function for scrollbars */\n\t-webkit-transition: transform cubic-bezier(0.33, 0.66, 0.66, 1);\n\t-moz-transition: transform cubic-bezier(0.33, 0.66, 0.66, 1);\n\t-o-tran" + 
 "sition: transform cubic-bezier(0.33, 0.66, 0.66, 1);\n\ttransition: transform cubic-bezier(0.33, 0.66, 0.66, 1);\n}\n\n/* indicator of a successful load */\n#dgrid-css-TouchScroll-loaded {\n\tdisplay:" + 
 " none;\n}"; 
var appUrl = config.ninejs && config.ninejs.applicationUrl;
appUrl = appUrl || config['applicationUrl'];
if (appUrl) { result.path = appUrl + result.path; }

return style.buildStyleObject(result);
});