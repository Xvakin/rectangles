(function (global) {
    "use strict";

    global.rectanglesApp = global.rectanglesApp || {};

    global.rectanglesApp.Rectangle = global.rectanglesApp.Class({
        init: function (width, height, color) {
            this.width = width;
            this.height = height;
            this.color = color;
        },
        render: function (container) {
            var el = global.document.createElement('div');
            el.style.width = this.width + 'px';
            el.style.height = this.height + 'px';
            el.style.backgroundColor = this.color;
            container.appendChild(el)
        },
        update: function (width, height, color) {
            this.width = width;
            this.height = height;
            this.color = color;
        }
    });

})(window);