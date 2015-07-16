/**
 * Created by vitali.nalivaika on 14.07.2015.
 */
(function() {
    'use strict';

    function changeElement(number) {
        if (number === undefined) {
            throw new TypeError('Wrong argument/s!');
        }

        return number * 2;
    }

    MyFunctionsJ.makeMap = function(array, func) {
        if (array === undefined || func === undefined) {
            throw  new Error('Wrong argument/s');
        }

        if (typeof func !== 'function') {
            throw new Error('The second arguments must be function!');
        }

        var result = [];

        for (var i = 0; i < array.length; i++) {
            result.push(func(array[i]));
        }

        return result;
    };
})();