/**
 * Created by vitali.nalivaika on 14.07.2015.
 */


function changeElement(number)
{
    if(arguments[0]===undefined)
    {
        return -1;
    }
    return number*2;
}

myFunctionsJ.makeMap =
    function makeMap(array,func)
    {
        if(arguments[0]=== undefined || arguments[1]===undefined)
        {
            return -1;
        }
        var result = [];
        for(var i=0;i<array.length;i++)
        {
            result.push(changeElement(array[i]));
        }
        return result;
    }

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
//alert(makeMap(numbers,changeElement));