(function (global) {
    "use strict";

    function NumberInput(container, value, context) {

        if (NumberInput.prototype._singletonInstance) {
            return NumberInput.prototype._singletonInstance;
        }

        NumberInput.prototype._singletonInstance = this;

        this.container = container;
        this.context = context;
        this.numberInput = this.container.querySelector('.app-rectangle-number');
        this.numberInput.value = value;

        this.update = function (number) {
            this.numberInput.value = number;
        };

        this.onNumberChange = function () {
            this.context.updateRectanglesNumber(this.numberInput.value);
        };

        this.numberInput.addEventListener('change', this.onNumberChange.bind(this));
    }

    global.rectanglesApp = global.rectanglesApp || {};
    global.rectanglesApp.NumberInput = NumberInput;

}(window));