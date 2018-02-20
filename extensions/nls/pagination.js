(function (factory) {
    'use strict';
    var isAmd = typeof (define) === 'function' && define.amd;
    if (isAmd) {
        define([], factory);
    }
    else if (typeof(exports) === 'object') {
        module.exports = factory();
    }
})(function () {
	return {
		root: {
			status: "${start} - ${end} of ${total} results",
			gotoFirst: "Go to first page",
			gotoNext: "Go to next page",
			gotoPrev: "Go to previous page",
			gotoLast: "Go to last page",
			gotoPage: "Go to page",
			jumpPage: "Jump to page"
		},
		//ar: true,
		//de: true,
		es: true,
		fr: true,
		//ja: true,
		//pt: true,
		//ro: true,
		//sk: true,
		//th: true,
		//"zh-cn": true,
		//"zh-hk": true
	};
});
