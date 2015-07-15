/**
 * Created by vitali.nalivaika on 14.07.2015.
 */

function average(counter, array) {
    var result = 0;

    for(var i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result / array.length;
}

function averageEvenNumbers(array, func) {
    if(arguments[0] === undefined || arguments[1] === undefined ) {
        throw new Error('Error');
    }

    if (typeof func !== 'function') {
        throw new Error('The second arguments must be function!');
    }

    var newArray = MyFunctionsJ.filter(array, myFunctionsJ.findEvenNumbers);
    return MyFunctionsJ.linearFold(newArray, 0, func);
}

var arr = [1,2,3,4,5,6,4,5,6,6];
//alert(averageEvenNumbers(arr,average));
