'use strict';

class calculator {
    sum() {
        var result = 0;

        for (var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }

        return result;
    }

    mult() {
        var result = 1;

        for (var i = 0; i < arguments.length; i++) {
            result *= arguments[i];
        }

        return result;
    }

}

module.exports = calculator;