define(['ninejs/css/style', 'ninejs/config'], function(style, config) {
var result = {path:"Js/prodoctivity/node_modules/dgrid/css/dgrid.css",children:[]};
result.data = "/* This stylesheet provides the structural CSS for the dgrid */\n.dgrid {\n\tposition: relative;\n\toverflow: hidden; /* This is needed by IE to prevent crazy scrollbar flashing */\n\tborder: 1px soli" + 
 "d #ddd;\n\theight: 30em;\n\tdisplay: block;\n}\n\n.dgrid-header {\n\tbackground-color: #eee;\n}\n\n.dgrid-header-row {\n\tposition: absolute;\n\tright: 17px; /* scrollbar width; revised in List.js if " + 
 "necessary */\n\tleft: 0;\n}\n\n.dgrid-header-scroll {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n}\n\n.dgrid-footer {\n\tposition: absolute;\n\tbottom: 0;\n\twidth: 100%;\n}\n\n.dgrid-header-hidd" + 
 "en,\nhtml.has-quirks .dgrid-header-hidden .dgrid-cell {\n\t/*\n\t\tUsed to \"hide\" header, without losing size information for reference.\n\t\t!important is used to supersede theme styles at higher s" + 
 "pecificity.\n\t\tLeft/right box styles are untouched, as they may influence width of\n\t\t.dgrid-content as updated in Grid's resize method.\n\t\tNote: Still not quite perfect in IE Quirks mode (1px l" + 
 "eft over).\n\t*/\n\tfont-size: 0; /* allow shrinkage in IE Quirks mode for Lists */\n\theight: 0 !important;\n\tborder-top: none !important;\n\tborder-bottom: none !important;\n\tmargin-top: 0 !import" + 
 "ant;\n\tmargin-bottom: 0 !important;\n\tpadding-top: 0 !important;\n\tpadding-bottom: 0 !important;\n}\n\n.dgrid-footer-hidden {\n\t/* Hiding footer is much simpler; simply set its display to none. */" + 
 "\n\tdisplay: none;\n}\n\n.dgrid-sortable {\n\tcursor: pointer;\n}\n.dgrid-header, .dgrid-header-row, .dgrid-footer {\n\toverflow: hidden;\n\tbackground-color: #eee;\n}\n\n.dgrid-row-table {\n\tborder-" + 
 "collapse: collapse;\n\tborder: none;\n\ttable-layout: fixed;\n\tempty-cells: show;\n\twidth: 100%; /* this becomes 'auto' for IE7 (non-quirks) */\n\theight: 100%;\n}\n.dgrid-cell {\n\tpadding: 0px;\n\t" + 
 "text-align: left;\n\toverflow: hidden;\n\tvertical-align: top;\n\tborder: 1px solid #ddd;\n\tborder-top-style: none;\n\t\n\tbox-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\t-ms-box-sizing: b" + 
 "order-box;\n\t-webkit-box-sizing: border-box;\n}\n.dgrid-cell-padding {\n\tpadding: 3px;\n}\n\n.dgrid-content {\n\tposition: relative;\n\theight: 99%;\n}\n\n.dgrid-scroller {\n\toverflow-x: auto;\n\to" + 
 "verflow-y: scroll;\n\tposition: absolute;\n\ttop: 0px;\n\tmargin-top: 25px; /* this will be adjusted programmatically to fit below the header*/\n\tbottom: 0px;\n\twidth: 100%;\n}\n\n.dgrid-preload {\n" + 
 "\t/* Force IE6 to honor 0 height */\n\tfont-size: 0;\n\tline-height: 0;\n}\n\n.dgrid-loading {\n\tposition: relative;\n\theight: 100%;\n}\n.dgrid-above {\n\tposition: absolute;\n\tbottom: 0;\n}\n\n.ui" + 
 "-icon {\n\twidth: 16px;\n\theight: 16px;\n\tbackground-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADwCAMAAADYSUr5AAAA7VBMVEUkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQ" + 
 "kIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQ" + 
 "kIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiQkIiTww4gUAAAATnRSTlMAGBAyBAhQv4OZLiJUcEBmYBoSzQwgPBZCSEoeWiYwUiyFNIeBw2rJz8c4RBy9uXyrtaWNqa2zKP2fJO8KBgKPo2KVoa9s351GPm5+kWho0kj9AAAPhUlEQVR4nO1" + 
 "djWLbthEGyUiq5YSSLXtp7FpLOmfzkmxr126tmi2p03RJ1/Xe/3EGgARxPyAgRbIk2/hkSz4CJO4+HsE7AJSVysjI2AMUUOxahZ2iANhzBtZWr4BoIRSYAVN5u4QwDwQDRbcwfUi5KS3wFuDmFnQLa4Dtb//cqktwD5QEFFwfUs7PoCCA7y4bEJVFizcIob8KmhAplww" + 
 "qVjt+9FBl3uINQniwEiryEyw9JHqGpQdEFNi+B4QQ7QOiHhysIPoAxUqxvdvvA9K42bsAv4S2fxfYOe57IJSRkZGRkZGxx7jxSHDHcRBXQMTyIjInBgHwBJ/bEx8PEANC+uhbpSSggCBAVODVabpI1S/k4WLZpTn6NpMhoX9Y40hxYERFpMcqUs4AloCtDQdID1YhnyX" + 
 "Z2hLjAYWiO9Dy1PDB7tPhIqLx+uMB8grZaR+Qxl2/C2RkZGRkZGRk7A7rBf7J0DR5/LUTjzUPIPSPGvQJiVJiB7kcQCiUOJrcFNtDZIf2xarQ3aGvLNxAVIFAabz90BFiBIlycTBhgWwOWCH0FLYHlPqwHaCvcIn2ZbosCevfPTRiFFcgvHukCjWwrc3GrGh1fsAof8E" + 
 "aUReKXkCB4/MzFNo97qLpFiKFYv/kNR5YQxQbQEofkZ2OuEOHqqT6gFTpru8CN7x/+jaZkZGRkZGRcV+x/rLUNcMMqUAscgnFocmpqkTzqymwVAPxfJ5PnIUUQOUKT04tEdWZyv3JCQSn96WS4pD97QfyW25A7NhSAbyhmVj0FEltA4vdiygBibXhoUYgykCUP7HwPTD" + 
 "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');\n}\n\n.ui-icon-triangle-1-e {\n\tbackground-position: -32px -16px;\n}\n.ui-icon" + 
 "-triangle-1-se {\n\tbackground-position: -48px -16px;\n}\n\n.dgrid-expando-icon {\n\twidth: 16px;\n\theight: 16px;\n}\n.dgrid-tree-container {\n\t-webkit-transition-duration: 0.3s;\n\t-moz-transition-" + 
 "duration: 0.3s;\n\t-ms-transition-duration: 0.3s;\n\t-o-transition-duration: 0.3s;\n\ttransition-duration: 0.3s;\n\toverflow: hidden;\n}\n.dgrid-tree-container.dgrid-tree-resetting {\n\t-webkit-transi" + 
 "tion-duration: 0;\n\t-moz-transition-duration: 0;\n\t-ms-transition-duration: 0;\n\t-o-transition-duration: 0;\n\ttransition-duration: 0;\n}\n\n/* Single Sort */\n.dgrid-sort-arrow {\n\tbackground-pos" + 
 "ition: -64px -16px;\n\tdisplay: block;\n\tfloat: right;\n\tmargin: 0 4px 0 5px;\n\theight: 12px;\n}\n.dgrid-sort-up .dgrid-sort-arrow {\n\tbackground-position: 0px -16px;\n}\n\n/* selection*/\n.dgrid-" + 
 "selected {\n\tbackground-color: #bfd6eb;\n}\n\n.dgrid-input {\n\twidth: 99%;\n}\n\n/* UA-specific hacks*/\nhtml.has-mozilla .dgrid *:focus, html.has-opera .dgrid *:focus {\n\t/* firefox's focus doesn'" + 
 "t work by default for divs prior to actually tabbing into it. This fixes that\n\t(we don't do any other browsers because we are trying to stay as close to native as possible) */ \n\toutline: 1px dotte" + 
 "d;\n}\nhtml.has-ie-6-7.has-no-quirks .dgrid-row-table {\n\t/* in IE7 this is needed instead of 100% to make it not create a horizontal scroll bar*/\n\twidth: auto;\n}\nhtml.has-quirks .dgrid-row-table" + 
 ", html.has-ie-6 .dgrid-row-table {\n\t/* similar story, height looks too high */\n\theight: auto; \n}\n\nhtml.has-quirks .dgrid-header-scroll,\nhtml.has-ie-6 .dgrid-header-scroll {\n\t/* ensure that h" + 
 "eader scroll node can shrink to 0 height in IE6 & quirks */\n\tfont-size: 0;\n}\n\nhtml.has-mozilla .dgrid-focus {\n\t/* fix row focus outline (prevents horizontal scroll in FF 3.6) */\n\toutline-offs" + 
 "et: -1px;\n}\n\n/* will be used to calculate the width of the scrollbar */\n.dgrid-scrollbar-measure {\n\twidth: 100px;\n\theight: 100px;\n\toverflow: scroll;\n\tposition: absolute;\n\ttop: -9999px;\n" + 
 "}\n\n/* Styles for auto-height grids; simply add the dgrid-autoheight class */\n.dgrid-autoheight {\n\theight: auto;\n}\n.dgrid-autoheight .dgrid-scroller {\n\tposition: relative;\n\toverflow-y: hidde" + 
 "n;\n}\n.dgrid-autoheight .dgrid-header-scroll {\n\tdisplay: none;\n}\n.dgrid-autoheight .dgrid-header {\n\tright: 0;\n}\n\n/* indicator of a successful load */\n#dgrid-css-dgrid-loaded {\n\tdisplay: n" + 
 "one;\n}"; 
var appUrl = config.ninejs && config.ninejs.applicationUrl;
appUrl = appUrl || config['applicationUrl'];
if (appUrl) { result.path = appUrl + result.path; }

return style.buildStyleObject(result);
});