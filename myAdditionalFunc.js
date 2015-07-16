/**
 * Created by vitali.nalivaika on 15.07.2015.
 */

ADDITIONAL_FUNCTIONS = (function() {
    'use strict';

    function memoize(func) {
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
    }

    function partial(func) {
        var args = arguments, partialArgs = [];

        for (var i = 1; i < args.length; i++) {
            partialArgs[i - 1] = args[i];
        }
        return function () {
            var argsArr = Array.prototype.slice.call(arguments, 0);

            partialArgs = partialArgs.concat(argsArr);
            return func.apply(this, partialArgs);
        }
    }

    return {
        memoize : memoize,
        partial : partial
    };

})();