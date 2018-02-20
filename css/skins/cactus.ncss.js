define(['ninejs/css/style', 'ninejs/config'], function(style, config) {
var result = {path:"Js/prodoctivity/node_modules/dgrid/css/skins/cactus.css",children:[]};
result.data = ".cactus .dgrid-content {\n\tborder: none;\n\tbackground: #faffef;\n\tcolor: #000;\n}\n\n.cactus .dgrid-header-row {\n\tborder-bottom: none;\n}\n\n.cactus .dgrid-header,\n.cactus .dgrid-footer {\n\tcol" + 
 "or: #fff;\n\tbackground: #333; /* Old browsers */\n\tbackground: -moz-linear-gradient(top, #4e4e4e 0%, #555555 12%, #636363 25%, #505050 39%, #303030 49%, #000000 50%, #1c1c1c 60%, #292929 76%, #1e1e1" + 
 "e 91%, #141414 100%); /* FF3.6+ */\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#4e4e4e), color-stop(12%,#555555), color-stop(25%,#636363), color-stop(39%,#505050), col" + 
 "or-stop(49%,#303030), color-stop(50%,#000000), color-stop(60%,#1c1c1c), color-stop(76%,#292929), color-stop(91%,#1e1e1e), color-stop(100%,#141414)); /* Chrome,Safari4+ */\n\tbackground: -webkit-linear" + 
 "-gradient(top, #4e4e4e 0%,#555555 12%,#636363 25%,#505050 39%,#303030 49%,#000000 50%,#1c1c1c 60%,#292929 76%,#1e1e1e 91%,#141414 100%); /* Chrome10+,Safari5.1+ */\n\tbackground: -o-linear-gradient(to" + 
 "p, #4e4e4e 0%,#555555 12%,#636363 25%,#505050 39%,#303030 49%,#000000 50%,#1c1c1c 60%,#292929 76%,#1e1e1e 91%,#141414 100%); /* Opera 11.10+ */\n\tbackground: -ms-linear-gradient(top, #4e4e4e 0%,#5555" + 
 "55 12%,#636363 25%,#505050 39%,#303030 49%,#000000 50%,#1c1c1c 60%,#292929 76%,#1e1e1e 91%,#141414 100%); /* IE10+ */\n\tbackground: linear-gradient(top, #4e4e4e 0%,#555555 12%,#636363 25%,#505050 39%" + 
 ",#303030 49%,#000000 50%,#1c1c1c 60%,#292929 76%,#1e1e1e 91%,#141414 100%); /* W3C */\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4e4e4e', endColorstr='#141414',GradientType" + 
 "=0 ); /* IE6-9 */\n}\n\n.cactus .dgrid-header th {\n\tpadding: 7px 3px;\n\tfont-weight: bold;\n\tcolor: #fff;\n\ttext-shadow: 0 -1px 0 rgba(0,0,0,.9);\n\tborder-color: #111;\n\ttext-transform: upperca" + 
 "se;\n}\n\n.cactus .dgrid-cell {\n\tborder-color: #bbc581;\n\tborder-top: none;\n\tborder-right: none;\n\tborder-left: none;\n}\n\n.cactus .dgrid-row-even {\n\tborder-top: 1px solid #FFF;\n}\n\n.cactus" + 
 " .dgrid-row-odd {\n\tbackground: #9a6;\n\tbackground-image: -moz-linear-gradient(top, rgba(185,203,127,1) 0%, rgba(143,160,91,1) 100%);\n\tbackground-image: -webkit-gradient(linear, left top, left bot" + 
 "tom, color-stop(0%,rgba(185,203,127,1)), color-stop(100%,rgba(143,160,91,1)));\n\tbackground-image: -webkit-linear-gradient(top, rgba(185,203,127,1) 0%,rgba(143,160,91,1) 100%);\n\tbackground-image: -" + 
 "o-linear-gradient(top, rgba(185,203,127,1) 0%,rgba(143,160,91,1) 100%);\n\tbackground-image: -ms-linear-gradient(top, rgba(185,203,127,1) 0%,rgba(143,160,91,1) 100%);\n\tbackground-image: linear-gradi" + 
 "ent(top, rgba(185,203,127,1) 0%,rgba(143,160,91,1) 100%);\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b9cb7f', endColorstr='#8fa05b',GradientType=0 );\n\ttext-shadow: 0 1px " + 
 "0 rgba(255,255,255,.9);\n\tborder-top: 1px solid #ccd595;\n\tcolor: #FFF;\n\ttext-shadow: 0 -1px 0 rgba(0,0,0,.3);\n}\n\n.cactus .dgrid-row-odd .dgrid-cell {\n\tborder-top: 1px solid #e9efbd;\n}\n\n.c" + 
 "actus .dgrid-row:hover,\n.cactus .dgrid-row:hover .dgrid-cell {\n\tbackground: #555;\n\tcolor: #fff;\n\ttext-shadow: 0 -1px 0 rgba(0,0,0,.9);\n\tborder-color: #555;\n}\n\n.cactus .dgrid-selected,\n.ca" + 
 "ctus .dgrid-selected .dgrid-cell {\n\tbackground: #333;\n\tcolor: #fff;\n\ttext-shadow: 0 -1px 0 rgba(0,0,0,.9);\n\tborder-color: #333;\n}\n\n.cactus .dgrid-selected:hover {\n\tbackground: #333;\n\tbo" + 
 "rder-color: #333;\n}\n\n.cactus .dgrid-highlight {\n\tbackground: #d6e5a5; /* background-color doesn't override CSS3 gradient */\n\tfilter: none; /* override gradient in IE */\n\tcolor: #000;\n\ttext-" + 
 "shadow: none;\n}\n\n/* need to use white-based image for sort arrow */\n.cactus .dgrid-sort-arrow {\n\tbackground-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADwCAMAAADYSUr5AAAC7mlD" + 
 "Q1BJQ0MgUHJvZmlsZQAAeAGFVM9rE0EU/jZuqdAiCFprDrJ4kCJJWatoRdQ2/RFiawzbH7ZFkGQzSdZuNuvuJrWliOTi0SreRe2hB/+AHnrwZC9KhVpFKN6rKGKhFy3xzW5MtqXqwM5+8943731vdt8ADXLSNPWABOQNx1KiEWlsfEJq/IgAjqIJQTQlVdvsTiQGQYNz" + 
 "+Xvn2HoPgVtWw3v7d7J3rZrStpoHhP1A4Eea2Sqw7xdxClkSAog836Epx3QI3+PY8uyPOU55eMG1Dys9xFkifEA1Lc5/TbhTzSXTQINIOJT1cVI+nNeLlNcdB2luZsbIEL1PkKa7zO6rYqGcTvYOkL2d9H5Os94+wiHCCxmtP0a4jZ71jNU/4mHhpObEhj0cGDX0+GAV" + 
 "txqp+DXCFF8QTSeiVHHZLg3xmK79VvJKgnCQOMpkYYBzWkhP10xu+LqHBX0m1xOv4ndWUeF5jxNn3tTd70XaAq8wDh0MGgyaDUhQEEUEYZiwUECGPBoxNLJyPyOrBhuTezJ1JGq7dGJEsUF7Ntw9t1Gk3Tz+KCJxlEO1CJL8Qf4qr8lP5Xn5y1yw2Fb3lK2bmrry4DvF" + 
 "5Zm5Gh7X08jjc01efJXUdpNXR5aseXq8muwaP+xXlzHmgjWPxHOw+/EtX5XMlymMFMXjVfPqS4R1WjE3359sfzs94i7PLrXWc62JizdWm5dn/WpI++6qvJPmVflPXvXx/GfNxGPiKTEmdornIYmXxS7xkthLqwviYG3HCJ2VhinSbZH6JNVgYJq89S9dP1t4vUZ/DPVR" + 
 "lBnM0lSJ93/CKmQ0nbkOb/qP28f8F+T3iuefKAIvbODImbptU3HvEKFlpW5zrgIXv9F98LZua6N+OPwEWDyrFq1SNZ8gvAEcdod6HugpmNOWls05Uocsn5O66cpiUsxQ20NSUtcl12VLFrOZVWLpdtiZ0x1uHKE5QvfEp0plk/qv8RGw/bBS+fmsUtl+ThrWgZf6b8C8" + 
 "/UXAeIuJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA7VBMVEUAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////" + 
 "//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9sDJFPAAAATnRSTlMAAgQGCAoMEBIWGBocHiAi" + 
 "JCYoLC4wMjQ4PD5AQkRGSEpQUlRaYGJmaGpsbnB8foGDhYeNj5GVmZ2foaOlqautr7O1ub2/w8fJzc/f7/2YuXWmAAAO2ElEQVR42u1df3vbthG+ZIxgg7FU1xSTlU1iNqHVdl7crJkTtWuXtZM3Zen7/T/O/qBEHg6/pEiWZRvv1ifPCSSBe3kA7g4ATZSQkLAH0ND3" + 
 "XH/sOQMbN08jrL/mDGhsocZNLBAAzAZbL8goBzRp/gtgqxioQNyvAUeNu7RAmwAt22OUyzdoESBvtyuwLtY7ZMBqv1uFQLnNIAUNCKEOsbhYBy/abgeXFmw3Ub5g20KCb9i2gEADdm8BblICrzBowc4LrDEgZIK7HwNuehaQXWj3s0ByhBISEhISEhISbswTvGE/SFvR" + 
 "GqTzrgMKATLA12vlA6yEkMZuXWFHAywCrAvk5Wa4qK0KJAE6GDzuNBiy2u9ucaDYkVHRgdspkgIEQNhdOsC2YKfN6oCBuPIBOshnLH1w8+GwxnXmA3SsC+5bOHzXZ4GEhISEhISEhBv0tDZ35jd6Pm5WATv0CSr0GYES1qvfJhSRpyH8i62eKIZ9iXk7fGXuCoINcJSG" + 
 "63c9IUSQVW49DDECjQZBXAHHA+32wKsgXPWF6rfDZcQIQDDeBkX4dd0euMRUcHE1vASBrAcG+XMbcciEgh3IaSGCccftYRON17COetE+7thDhHB55InidSD6QiIVIDjugSJdePezwDXfH58mExISEhISEu4rNt+WuqGboR270f2PdPmh0aWqSPXrNWClCsLxPFZoACsn" + 
 "vji1glcHHQqg4Vzej6UIgvU74lupQCT9EMhItAuLPUV2ax2b3XWQgMjecLeZhRgI8qeBmHm5EkKQ4TB4NBuwICscdkTj1pENWqEB7lJ3dAwE4nk4bMB/u0WA1QK7eWa57GJxAtwN8L7ClYqBYPwcHiLItUIftCCjC4guEu0C7l6uvVdoe8uLrUCgjzgMTHRxslboIwTo" + 
 "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" + 
 "3+8TPF1Flhsp15XXrW9TOQp5PuB9/4ClfEYAnS3ky+5bae1W2sv+eiaTt/x9X/7eWz8hWD5vsza8nGT7iZ93CGbDxOZouXUWANHZGV8djl1vl1vX90vkrnK+eub+F0Z76NtvvyWzPUTjFdfX+Jlej4yzRU9mDSYEridLofD1goBoe/jn413yuNV/ewQ07Bt0DgJc/66j" + 
 "ULR+h4WELGBMixPp2+sCTRPuAlGTR7ALOEw89DxyWRS/ftzqvxoB8nyAY1BbDoKX3kEKUvYPqs5BUtYvB1mzfMmPTwbGMM87hLDraWzTaXRdOY5dOzKbOlLrynHs2pXd1JVeV05ISEhISEiIhQPAtcn7T4D5tba4fAcJQJgAZMj8f93NJoBAt4sAAKbCQhYEgYzN1LYM" + 
 "ShaQxoDbRMB9nwUSEhISEhIStg19ezyB6C5IlOtvdNXi7wPt9bsivTEB8n3fJv23YQFS31ulv2kB0Mv/eQhw/b0BDdMCNPTdHQPKJUz9taW/vjcW0F5/e/Xf1AJuvf6bzgIe/e+rH9Drf4f8gLXY1P1/CQl7jv8DddCjgiWnNnoAAAAASUVORK5CYII=');\n}\n\n/*" + 
 " for ColumnReorder */\n.cactus .dgrid-header .dojoDndItemBefore {\n\tborder-left: 2px dotted #fff !important;\n}\n.cactus .dgrid-header .dojoDndItemAfter {\n\tborder-right: 2px dotted #fff !important;" + 
 "\n}\n\n/* for pagination in IE < 8 + quirks, need additional rule to override link color */\n.has-ie-6-7 .cactus .dgrid-navigation a,\n.has-ie.has-quirks .cactus .dgrid-navigation a {\n\tcolor: #fff;\n" + 
 "}"; 
var appUrl = config.ninejs && config.ninejs.applicationUrl;
appUrl = appUrl || config['applicationUrl'];
if (appUrl) { result.path = appUrl + result.path; }

return style.buildStyleObject(result);
});