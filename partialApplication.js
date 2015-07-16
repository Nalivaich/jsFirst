/**
 * Created by vitali.nalivaika on 14.07.2015.
 */
(function() {
    'use strict';

    MyFunctionsJ.partial = function(func) {
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

})();