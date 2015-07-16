/**
 * Created by vitali.nalivaika on 14.07.2015.
 */
(function() {
    'use strict';

    MyFunctionsJ.linearFold = function(array, counter, func)
    {
        if(array === undefined || counter === undefined || func === undefined){
            throw new Error('Wrong argument/s');
        }

        var newCounter = counter;
        for(var i=0;i<array.length;i++)
        {
            newCounter = func(newCounter, array[i], i, array);
        }

        return newCounter;
    };


})();