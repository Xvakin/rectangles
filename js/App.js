(function (global) {
    "use strict";

    global.rectanglesApp = global.rectanglesApp || {};

    function App(container) {
        this.rectangles = this.getRectangles();
        this.rectanglesListEl = global.document.getElementById('app-rect-list');

        this.numberInput = new global.rectanglesApp.NumberInput(global.document.getElementById('number-input'), this);

        this.numberInput.update(this.rectangles.length);
        this.renderRectangles();
        this.bindEvents();
    }

    App.prototype.bindEvents = function () {
        document.getElementById('app-add-rect').addEventListener('click', this.onAddRectangle.bind(this));
    };

    App.prototype.getRectangles = function () {
        var rectangles = [];
        if (global.localStorage) {
            rectangles = global.JSON.parse(global.localStorage.getItem('rectangles')) || [];
        }
        return rectangles;
    };

    App.prototype.saveRectangles = function () {
        if (global.localStorage) {
            global.localStorage.setItem('rectangles', global.JSON.stringify(this.rectangles));
        }
    };

    App.prototype.getRectangleById = function (id) {
        for (var i = 0; i < this.rectangles.length; i++) {
            if (this.rectangles[i].id === id) {
                return this.rectangles[i];
            }
        }
    };

    App.prototype.addRectangle = function () {
        var id = '_' + Math.random().toString(36).substr(2, 9);
        this.rectangles.push({id: id, params: {width: 100, height: 50, color: this.getRandomColor()}});
    };

    App.prototype.updateRectangle = function (id, params) {
        var rectangle = this.getRectangleById(id);
        rectangle.params = params;
        this.saveRectangles();
    };

    App.prototype.removeRectangle = function (id) {
        var rectangle = this.getRectangleById(id),
            index = this.rectangles.indexOf(rectangle);
        if (index > -1) {
            this.rectangles.splice(index, 1);
        }
        this.renderRectangles();
        this.numberInput.update(this.rectangles.length);
    };

    App.prototype.renderRectangles = function () {
        var rect, rectEl;
        this.rectanglesListEl.innerHTML = '';
        for (var i = 0; i < this.rectangles.length; i++) {
            rectEl = global.document.createElement('div');
            new global.rectanglesApp.Rectangle(rectEl, this.rectangles[i].id, this.rectangles[i].params, this);
            this.rectanglesListEl.appendChild(rectEl);
        }
        this.saveRectangles();
    };

    App.prototype.updateRectanglesNumber = function (number) {
        var diff = number - this.rectangles.length;
        if (diff > 0) {
            for (var i = 0; i < diff; i++) {
                this.addRectangle();
            }
        } else {
            this.rectangles = this.rectangles.slice(0, number);
        }
        this.renderRectangles();
    };

    App.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    App.prototype.onAddRectangle = function () {
        this.addRectangle();
        this.renderRectangles();
        this.numberInput.update(this.rectangles.length);
    };

    global.rectanglesApp.App = App;

})(window);