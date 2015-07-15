/**
 * Created by vitali.nalivaika on 14.07.2015.
 */
(function() {
    'use strict';

    function multiplication(counter, array) {
        if (arguments[0] === undefined || arguments[1] === undefined) {
            throw new Error('Wrong argument/s');
        }

        for (var i = 0; i < array.length; i++) {
            counter *= array[i];
        }

        return counter;
    }

    MyFunctionsJ.linearFold = function(array, counter, func) {
        if (arguments[0] === undefined || arguments[1] === undefined || arguments[2] === undefined) {
            throw new Error('Wrong argument/s');
        }

        if (typeof func !== 'function') {
            throw new Error('The third arguments must be function!');
        }

        return func(counter, array);
    };

})();