(function (global) {
    "use strict";

    global.rectanglesApp = global.rectanglesApp || {};

    global.rectanglesApp.RectangleEditForm = global.rectanglesApp.Class({
        init: function (elementId) {
            this.currentRect = {};
            this.formEl = global.document.getElementById('edit-form');
            this.bindEvents();
        },
        render: function () {
            return this.formEl;
        },
        bindEvents: function () {
            document.getElementsByTagName('form')[0].addEventListener('submit', this.onSubmit.bind(this));
        },
        showForm: function (el) {
            el.appendChild(this.formEl);
        },
        setCurrentRect: function (rect) {
            var fields = this.formEl.getElementsByTagName('input');
            this.currentRect = rect;
            fields.width.value = rect.width;
            fields.height.value = rect.height;
            fields.color.value = rect.color;
        },
        onSubmit: function (event) {
            this.currentRect.update(200, 200, 'green');
            event.preventDefault();
        }
    });

})(window);