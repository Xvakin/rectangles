(function (global) {
    "use strict";

    function Rectangle(container, id, params, context) {
        this.id = id;
        this.container = container;
        this.params = params;
        this.template = document.getElementById('template-rectangle').innerHTML;
        this.context = context;
        this.render();
    }

    Rectangle.prototype.render = function () {
        var el = global.document.createElement('div');
        this.container.innerHTML = this.template;
        el.style.width = this.params.width + 'px';
        el.style.height = this.params.height + 'px';
        el.style.backgroundColor = this.params.color;
        this.container.appendChild(el);

        this.container.querySelectorAll('.rectangle-edit')[0].addEventListener('click', this.onEditRectangle.bind(this));
        this.container.querySelectorAll('.rectangle-delete')[0].addEventListener('click', this.onDeleteRectangle.bind(this));
    };

    Rectangle.prototype.update = function (params) {
        this.params = params;
        this.context.updateRectangle(this.id, params);
        this.render();
    };

    Rectangle.prototype.onEditRectangle = function (event) {
        var form = new global.rectanglesApp.RectangleEditForm();
        form.appendTo(this.container);
        form.setRectangle(this);
        event.preventDefault();
    };

    Rectangle.prototype.onDeleteRectangle = function (event) {
        this.context.removeRectangle(this.id);
        event.preventDefault();
    };

    global.rectanglesApp = global.rectanglesApp || {};
    global.rectanglesApp.Rectangle = Rectangle;

})(window);