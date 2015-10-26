(function (global) {
    "use strict";

    global.rectanglesApp = global.rectanglesApp || {};

    global.rectanglesApp.App = global.rectanglesApp.Class({
        init: function (container) {
            var rectListEl = global.document.getElementById('app-rect-list');
            this.rectList = new global.rectanglesApp.RectangleList(rectListEl);
            this.render(container);
        },
        render: function (container) {
            var el = global.document.createElement('div');
            container.appendChild(el);
        }
    });

})(window);