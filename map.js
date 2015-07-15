/**
 * Created by vitali.nalivaika on 14.07.2015.
 */

myFunctionsJ.makeMap = makeMap;

function changeElement(number) {
    if(arguments[0] === undefined) {
        throw new TypeError('Error!');
    }

    return number * 2;
}

function makeMap(array, func) {
    if(arguments[0] === undefined || arguments[1] === undefined) {
        throw  new Error('Error');
    }

    if (typeof func !== 'function') {
        throw new Error('The second arguments must be function!');
    }

    var result = [];

    for(var i = 0; i < array.length; i++) {
        result.push(changeElement(array[i]));
    }

    return result;
}

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
//alert(makeMap(numbers,changeElement));