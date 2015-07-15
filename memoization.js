/**
 * Created by vitali.nalivaika on 15.07.2015.
 */

function sum(a,b) {
    return a + b;
}

function memoization(func) {
    var memo = {};
    var slice = Array.prototype.slice;

    return function() {
        var args = slice.call(arguments);

        if (args in memo) {
            return memo[args];
        } else {
            return (memo[args] = func.apply(this, args));
        }
    }
}

var varMemo = memoization(sum);
//alert(varMemo(5,5));
//alert(varMemo(5,5));

