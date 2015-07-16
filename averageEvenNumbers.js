/**
 * Created by vitali.nalivaika on 14.07.2015.
 */

(function() {
    'use strict';

    MyFunctionsJ.average = function(counter, number, index, array) {

        if(index == (array.length - 1)) {
            return (counter += number)/array.length;
        }
        return counter += number;
    };

    MyFunctionsJ.averageEvenNumbers = function(array, func) {
        if (array === undefined || func === undefined) {
            throw new Error('Wrong argument/s');
        }

        if (typeof func !== 'function') {
            throw new Error('The second arguments must be function!');
        }

        var newArray = MyFunctionsJ.filter(array, MyFunctionsJ.findEvenNumbers);
        return MyFunctionsJ.linearFold(newArray, 0, func);
    };

})();
