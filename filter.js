/**
 * Created by vitali.nalivaika on 14.07.2015.
 */

(function() {
    'use strict';
    MyFunctionsJ.findEvenNumbers = function(number) {
        return ((number % 2) == 0);
    };

    MyFunctionsJ.filter = function(array, func) {
        if (array === undefined || func === undefined) {
            throw new Error('Wrong argument/s');
        }

        if (typeof func !== 'function') {
            throw new Error('The second arguments must be function!');
        }

        var result = [];

        for (var i = 0; i < array.length; i++) {
            if (func(array[i])) {
                result.push(array[i]);
            }
        }
        return result;
    };

})();