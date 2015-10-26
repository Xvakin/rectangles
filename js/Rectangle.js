(function (global) {
    "use strict";

    global.rectanglesApp = global.rectanglesApp || {};

    global.rectanglesApp.Rectangle = global.rectanglesApp.Class({
        init: function (container, width, height, color) {
            this.container = container;
            this.width = width;
            this.height = height;
            this.color = color;
        },
        render: function () {
            var el = global.document.createElement('div');
            this.container.innerHTML = '';
            el.style.width = this.width + 'px';
            el.style.height = this.height + 'px';
            el.style.backgroundColor = this.color;
            this.container.appendChild(el);
        },
        update: function (width, height, color) {
            this.width = width;
            this.height = height;
            this.color = color;
            this.render();
        }
    });

})(window);