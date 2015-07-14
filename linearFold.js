/**
 * Created by vitali.nalivaika on 14.07.2015.
 */


function multiplication(x,y)
{
    if(arguments[0]=== undefined || arguments[1]===undefined)
    {
        return -1;
    }

    return x*y;
}

myFunctionsJ.linearFold =
    function linearFold(array, counter, func)
    {
        if(arguments[0]=== undefined || arguments[1]===undefined || arguments[2]===undefined)
        {
            return -1;
        }
        for(var i=0;i<array.length;i++)
        {
            counter = multiplication(counter,array[i]);
        }
        return counter;
    }

var array3=[1,2,3,4,5];
//alert(linearFold(array3,1,multiplication));