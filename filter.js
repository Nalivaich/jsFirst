/**
 * Created by vitali.nalivaika on 14.07.2015.
 */

myFunctionsJ.findEvenNumbers = function(number){return ((number%2)== 0);}
myFunctionsJ.filter = filter;

    function filter(array, func)
    {
        if(arguments[0] === undefined || arguments[1] === undefined) {
            return -1;
        }
        var result = [];
        for(var i = 0;i < array.length;i++)
        {
            if(func(array[i])) {
                result.push(array[i]);
            }
        }
        return result;
    }

var array6 = [1,2,3,4,5,6,7,8,9,10];
/*alert(filter(array6,function(number){ //фильтрует и оставляет только четные числа
    return ((number%2)== 0);
}));*/