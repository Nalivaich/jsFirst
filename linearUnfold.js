/**
 * Created by vitali.nalivaika on 14.07.2015.
 */
(function() {
    'use strict';

    //Returns an array from number to maxNumber
    MyFunctionsJ.unfoldExample = function(number, maxNumber) {
        var max  = (maxNumber === undefined) ? 10 : maxNumber;

        if(number > max) {
            return {
                element : false,
                nextCounter : false
            };
        }
        return {
            element : number,
            nextCounter : (number + 1)
        };
    };


    MyFunctionsJ.linearUnfold = function(counter, func) {
        if (counter === undefined || func === undefined) {
            throw new Error('Wrong argument/s');
        }

        if (typeof func !== 'function') {
            throw new Error('The second arguments must be function!');
        }

        var callBackResult = {
            element  : 0,
            nextCounter : 0
        };
        var newCounter = counter;
        var newArray = [];
        var index = 0;
        do {
            callBackResult = func(newCounter);
            if(callBackResult.element === undefined || callBackResult.nextCounter === undefined) {
                return;
            }
            if(callBackResult.element != false) {
                newArray[index] = callBackResult.element;
                index++;
            }
            newCounter = callBackResult.nextCounter;
            if(callBackResult.element === false || callBackResult.nextCounter === false) {
                return newArray;
            }
        } while (true)
    };

})();
