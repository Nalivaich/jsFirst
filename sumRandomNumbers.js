/**
 * Created by vitali.nalivaika on 14.07.2015.
 */
(function() {
    'use strict';
    MyFunctionsJ.giveRandomArray = function(number, max, min) {
        var maxValue;
        var minValue;
        var result = [];

        if (arguments[0] === undefined) {
            return -1;
        }

        maxValue = (arguments[1] === undefined) ? 100 : max;
        minValue = (arguments[2] === undefined) ? 0 : min;

        for (var i = 0; i < number; i++) {
            result.push(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
        }

        return result;
    };

    MyFunctionsJ.sumRandomNumbers = function(number, func) {
        if (arguments[0] === undefined || arguments[1] === undefined) {
            throw new Error('Wrong argument/s');
        }

        if (typeof func !== 'function') {
            throw new Error('The second arguments must be function!');
        }

        var array = MyFunctionsJ.linearUnfold(number, func);
        var result = 0;

        for (var i = 0; i < array.length; i++) {
            result += array[i];
        }

        return result;
    }

})();