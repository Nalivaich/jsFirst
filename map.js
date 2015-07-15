/**
 * Created by vitali.nalivaika on 14.07.2015.
 */
(function() {
    'use strict';

    function changeElement(number) {
        if (arguments[0] === undefined) {
            throw new TypeError('Wrong argument/s!');
        }

        return number * 2;
    }

    MyFunctionsJ.makeMap = function(array, func) {
        if (arguments[0] === undefined || arguments[1] === undefined) {
            throw  new Error('Wrong argument/s');
        }

        if (typeof func !== 'function') {
            throw new Error('The second arguments must be function!');
        }

        var result = [];

        for (var i = 0; i < array.length; i++) {
            result.push(changeElement(array[i]));
        }

        return result;
    };

})();