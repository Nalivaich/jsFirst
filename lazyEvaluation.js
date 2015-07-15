/**
 * Created by vitali.nalivaika on 15.07.2015.
 */


function lazyEval (func) {
    return func.bind.apply(func, arguments);
}