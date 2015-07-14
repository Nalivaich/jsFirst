/**
 * Created by vitali.nalivaika on 13.07.2015.
 */

myFunctionsJ.first = satisfy;

function checkNumber(number)
{
    if(arguments[0] === undefined) {
        return -1;
    }

    const c = 10;
    return (number > c);
}

function satisfy(array,func)
{
    if(arguments[0] === undefined || arguments[1] === undefined) {
        return -1;
    }
    //var result = myFunctionsJ.linearFold(array,0,func);
    for(var i = 0;i < array.length;i++)
    {
        if(func(array[i])) {
            return array[i];
        }
    }
}

var someArray=[4,6,7,8,9,10,77,88];
//alert(satisfy(someArray,checkNumber));