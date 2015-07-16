/**
 * Created by vitali.nalivaika on 14.07.2015.
 */
(function() {
    'use strict';
    MyFunctionsJ.giveRandomArray = function(number, max, min) {
        var maxValue;
        var minValue;
        var result = [];

        if (number === undefined) {
            throw new TypeError('Wrong argument/s!');
        }

        maxValue = (max === undefined) ? 100 : max;
        minValue = (min === undefined) ? 0 : min;

        for (var i = 0; i < number; i++) {
            result.push(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
        }

        return result;
    };


    MyFunctionsJ.giveRandomNumber = function(number, max, min) {
        var maxValue;
        var minValue;

        maxValue = (max === undefined) ? 100 : max;
        minValue = (min === undefined) ? 0 : min;

        if(number === 0) {
            return {
                element : false,
                nextCounter : false
            };
        }
        return {
            element : (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue),
            nextCounter : (number - 1)
        };

    };



    MyFunctionsJ.sumRandomNumbers = function(number, func) {
        if (number === undefined || func === undefined) {
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