(function (global) {
    "use strict";

    function RectangleEditForm() {

        if (RectangleEditForm.prototype._singletonInstance) {
            return RectangleEditForm.prototype._singletonInstance;
        }

        RectangleEditForm.prototype._singletonInstance = this;

        this.template = global.document.getElementById('template-rectangle-edit-form').innerHTML;
        this.container = document.createElement('div');
        this.container.innerHTML = this.template;
        this.fields = this.container.getElementsByTagName('input');
        this.rectangle = {};

        this.setRectangle = function (rectangle) {
            this.rectangle = rectangle;
            this.fields.width.value = rectangle.params.width;
            this.fields.height.value = rectangle.params.height;
            this.fields.color.value = rectangle.params.color;
        };

        this.hide = function () {
            this.container.style.display = 'none';
        };

        this.onFormSubmit = function (event) {
            this.rectangle.update({
                width: this.fields.width.value,
                height: this.fields.height.value,
                color: this.fields.color.value
            });
            event.preventDefault();
        };

        this.onCancelClick = function (event) {
            this.hide();
            event.preventDefault();
        };

        this.appendTo = function (el) {
            el.appendChild(this.container);
            this.container.style.display = 'block';
        };

        this.container.getElementsByTagName('form')[0].addEventListener('submit', this.onFormSubmit.bind(this));
        this.container.querySelectorAll('.cancel')[0].addEventListener('click', this.onCancelClick.bind(this));
    }

    global.rectanglesApp = global.rectanglesApp || {};
    global.rectanglesApp.RectangleEditForm = RectangleEditForm;

}(window));