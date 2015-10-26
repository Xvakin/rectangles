(function (global) {
    "use strict";

    global.rectanglesApp = global.rectanglesApp || {};

    global.rectanglesApp.RectangleList = global.rectanglesApp.Class({
        init: function (container) {
            this.container = container;
            this.rects = [
                new global.rectanglesApp.Rectangle(100, 100, 'pink'),
                new global.rectanglesApp.Rectangle(100, 50, 'blue')
            ];
            this.render();
            this.bindEvents();

            this.editForm = new rectanglesApp.RectangleEditForm();
        },
        render: function () {
            var el, link;
            this.container.innerHTML = '';
            for (var i = 0, ii = this.rects.length; i < ii; i++) {
                el = global.document.createElement('div');
                link = global.document.createElement('a');
                link.setAttribute('href', '#');
                link.textContent = 'Edit';
                link.addEventListener('click', (function (i, el) {
                    return function () {
                        this.editRect(this.rects[i], el);
                    }
                })(i, el).bind(this));
                el.appendChild(link);
                this.container.appendChild(el);
                this.rects[i].render(el);
            }
        },
        bindEvents: function () {
            document.getElementById('app-add-rect').addEventListener('click', this.addRect.bind(this));
        },
        addRect: function (width, height, color) {
            var newRect = new global.rectanglesApp.Rectangle(100, 100, 'gray');
            this.rects.push(newRect);
            this.render();
        },
        editRect: function (rect, el) {
            this.editForm.showForm(el);
            this.editForm.setCurrentRect(rect);
            rect.update(200, 50, 'green');
            //this.render();
        }
    });

})(window);