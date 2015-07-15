/**
 * Created by vitali.nalivaika on 14.07.2015.
 */

(function() {
    'use strict';
    MyFunctionsJ.average = function(counter, array) {
        var result = 0;

        for (var i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result / array.length;
    }

    MyFunctionsJ.averageEvenNumbers = function(array, func) {
        if (arguments[0] === undefined || arguments[1] === undefined) {
            throw new Error('Wrong argument/s');
        }

        if (typeof func !== 'function') {
            throw new Error('The second arguments must be function!');
        }

        var newArray = MyFunctionsJ.filter(array, MyFunctionsJ.findEvenNumbers);
        return MyFunctionsJ.linearFold(newArray, 0, func);
    };

})();
