/**
 * Created by vitali.nalivaika on 14.07.2015.
 */

function sum() {

    var result = 0;

    for(var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;

}

function partial(func) {
    var args = arguments, partialArgs = [];

    for(var i = 1; i < args.length; i++) {
        partialArgs[i-1] = args[i];
    }
    return function () {
        var argsArr = Array.prototype.slice.call(arguments, 0);

        partialArgs = partialArgs.concat(argsArr);
        return func.apply(this, partialArgs);
    }
}

var res = partial(sum,5);
//alert(res(5,6,7,8,9));