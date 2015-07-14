/**
 * Created by vitali.nalivaika on 14.07.2015.
 */


function sum(x,y)
{return x+y};

function curry(func,a)
{
    return function(b){
        return func(a,b);
    };
}
var makeSum = curry(sum,5);

alert(makeSum(10));