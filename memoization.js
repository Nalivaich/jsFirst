/**
 * Created by vitali.nalivaika on 15.07.2015.
 */
(function() {
    'use strict';

    MyFunctionsJ.memoization = function(func) {
        var memo = {};
        var slice = Array.prototype.slice;

        return function () {
            var args = slice.call(arguments);

            if (args in memo) {
                return memo[args];
            } else {
                return (memo[args] = func.apply(this, args));
            }
        }
    };

})();
