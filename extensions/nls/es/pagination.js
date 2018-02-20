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
			status: "${start} - ${end} de ${total} resultados"
	};
});
