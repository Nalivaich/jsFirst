/**
 * Created by vitali.nalivaika on 13.07.2015.
 */
(function() {
    'use strict';

    function checkNumber(number) {
        if (arguments[0] === undefined) {
            return -1;
        }

        const SATISFY_VALUE = 10;
        return (number > SATISFY_VALUE);
    }

    MyFunctionsJ.first = function(array, func) {
        if (arguments[0] === undefined || arguments[1] === undefined) {
            throw new Error('Error');
        }

        if (typeof func !== 'function') {
            throw new Error('The second arguments must be function!');
        }

        //var result = myFunctionsJ.linearFold(array,0,func);
        for (var i = 0; i < array.length; i++) {
            if (func(array[i])) {
                return array[i];
            }
        }
    };

})();