/**
 * Created by vitali.nalivaika on 14.07.2015.
 */


function unfold(number)//ищет ближайшее меньшее, кратное двум число
{
    if (arguments[0] === undefined) {
        return -1;
    }
    var result = [];
    while(number) {
        if (number === 0) {
            number= -1;
        }
        if ((number % 2) != 0) {
            result.push(number-1);
            number -= 1;
        } else {
            result.push(number - 2);
            number -= 2;
        }
    }
    return result;
}

myFunctionsJ.linearUnfold =
    function linearUnfold(counter,func)
    {
        var result = [];
        if(arguments[0]=== undefined || arguments[1]===undefined)
        {
            return -1;
        }
        result = func(counter);
        return result;
    }

var var1 = 101;
//alert(unfold(101));
