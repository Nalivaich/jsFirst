/**
 * Created by vitali.nalivaika on 15.07.2015.
 */

(function() {
    'use strict';

    MyFunctionsJ.lazyEval = function(func) {
        if (arguments[0] === undefined) {
            throw new Error('Wrong argument/s');
        }

        return func.bind.apply(func, arguments);
    }
})();