(function (global) {
    "use strict";

    global.rectanglesApp = global.rectanglesApp || {};

    global.rectanglesApp.RectangleList = global.rectanglesApp.Class({
        init: function (container) {
            this.container = container;
            this.rects = [];
            this.rectsData = [
                {width: 100, height: 50, color: 'pink'},
                {width: 100, height: 50, color: 'blue'}
            ];
            this.editForm = new rectanglesApp.RectangleEditForm();

            this.bindEvents();
            this.render();
        },
        render: function () {
            this.container.innerHTML = '';
            for (var i = 0, ii = this.rectsData.length; i < ii; i++) {
                this.addRect(this.rectsData[i].width, this.rectsData[i].height, this.rectsData[i].color);
            }
        },
        bindEvents: function () {
            document.getElementById('app-add-rect').addEventListener('click', this.addNewRect.bind(this));
        },
        addRect: function (width, height, color) {
            var el, link, rectEl, rect;
            el = global.document.createElement('div');
            rectEl = global.document.createElement('div');
            rect = new global.rectanglesApp.Rectangle(rectEl, width, height, color);
            this.rects.push(rect);
            link = global.document.createElement('a');
            link.setAttribute('href', '#');
            link.textContent = 'Edit';
            link.addEventListener('click', (function (el) {
                return function () {
                    this.editRect(rect, el);
                }
            })(el).bind(this));
            el.appendChild(link);
            el.appendChild(rectEl);
            this.container.appendChild(el);
            rect.render(el);
        },
        addNewRect: function () {
            this.addRect(100, 100, 'gray');
        },
        editRect: function (rect, el) {
            this.editForm.showForm(el);
            this.editForm.setCurrentRect(rect);
        }
    });

})(window);