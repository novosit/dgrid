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
		status: "${start} - ${end} de ${total} résultats",
		gotoFirst: "Aller à la première page",
		gotoNext: "Aller à la page suivante",
		gotoPrev: "Aller à la page précédente",
		gotoLast: "Aller à la dernière page",
		gotoPage: "Aller à la page",
		jumpPage: "Aller à la page"
	};
});