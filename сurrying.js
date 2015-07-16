/**
 * Created by vitali.nalivaika on 14.07.2015.
 */
(function() {
    'use strict';

    Function.prototype.curry = function (numArgs) {
        var func = this;
        numArgs = numArgs || func.length;

        function subCurry(prev) {
            return function (arg) {
                var args = prev.concat(arg);

                if (args.length < numArgs) {
                    return subCurry(args);
                } else {
                    return func.apply(this, args);
                }
            };
        }

        return subCurry([]);
    };

})();

