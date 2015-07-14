/**
 * Created by vitali.nalivaika on 14.07.2015.
 */

myFunctionsJ.linearFold = linearFold;

function multiplication(counter, array)
{
    if(arguments[0] === undefined || arguments[1] === undefined)
    {
        return -1;
    }
    for(var i = 0; i < array.length; i++)
    {
        counter *= array[i];
    }
    return counter;
}

function linearFold(array, counter, func)
{
    if(arguments[0] === undefined || arguments[1] === undefined || arguments[2] === undefined) {
        return -1;
    }
    return func(counter, array);
}

var array3 = [1,2,3,4,5];
//alert(linearFold(array3, 1, multiplication));