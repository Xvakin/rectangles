(function (global) {
    "use strict";

    global.rectanglesApp = global.rectanglesApp || {};

    global.rectanglesApp.Class = function (methods) {
        var klass = function () {
            this.init.apply(this, arguments);
        };

        for (var property in methods) {
            klass.prototype[property] = methods[property];
        }

        if (!klass.prototype.init) klass.prototype.init = function () {

        };

        return klass;
    };

})(window);