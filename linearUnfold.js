/**
 * Created by vitali.nalivaika on 14.07.2015.
 */
(function() {
    'use strict';

//ищет ближайшее меньшее, кратное двум число
    function unfold(number) {
        if (arguments[0] === undefined) {
            throw new Error('Wrong argument/s');
        }

        var result = [];

        while (number) {
            if (number === 0) {
                number = -1;
            }

            if ((number % 2) != 0) {
                result.push(number - 1);
                number -= 1;
            } else {
                result.push(number - 2);
                number -= 2;
            }
        }
        return result;
    }

    MyFunctionsJ.linearUnfold = function(counter, func) {
        if (arguments[0] === undefined || arguments[1] === undefined) {
            throw new Error('Wrong argument/s');
        }

        if (typeof func !== 'function') {
            throw new Error('The second arguments must be function!');
        }

        return func(counter);
    };

})();
