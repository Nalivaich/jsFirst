/**
 * Created by vitali.nalivaika on 14.07.2015.
 */

function average(counter,array){
    var result = 0;
    for(var i = 0;i < array.length;i++)
    {
        result += array[i];
    }
    return result / array.length;
}

function averageEvenNumbers(array, func)
{
    var newArray = myFunctionsJ.filter(array, myFunctionsJ.findEvenNumbers);
    return myFunctionsJ.linearFold(newArray, 0, func);
}

var arr = [1,2,3,4,5,6,4,5,6,6];
//alert(averageEvenNumbers(arr,average));
