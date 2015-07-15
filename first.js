/**
 * Created by vitali.nalivaika on 13.07.2015.
 */

MyFunctionsJ.first = satisfy;

function checkNumber(number) {
    if(arguments[0] === undefined) {
        return -1;
    }

    const SATISFY_VALUE = 10;
    return (number > SATISFY_VALUE);
}

function satisfy(array, func) {
    if(arguments[0] === undefined || arguments[1] === undefined) {
        throw new Error('Error');
    }

    if (typeof func !== 'function') {
        throw new Error('The second arguments must be function!');
    }

    //var result = myFunctionsJ.linearFold(array,0,func);
    for(var i = 0; i < array.length; i++) {
        if(func(array[i])) {
            return array[i];
        }
    }
}

var someArray=[4,6,7,8,9,10,77,88];
//alert(satisfy(someArray,checkNumber));