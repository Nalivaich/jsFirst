/**
 * Created by vitali.nalivaika on 14.07.2015.
 */


function sum() {

    var result = 0;
    for(var i=0;i<arguments.length;i++)
    {
        result += arguments[i];
    }
    return result;


}

/*
function curryFunc(func,a)
 {
 return function(b){
 return func(a,b);
 };
 }
 var makeSum = curryFunc(sum,5);
*/
 //alert(makeSum(10));

function curry(func){
    var args = arguments, curryArgs = [];
    for(var i = 1; i< args.length;i++){
        curryArgs[i-1] = args[i];
    }
    return function(){
        var argsArr = Array.prototype.slice.call(arguments, 0);
        curryArgs = curryArgs.concat(argsArr);
        return func.apply(this, curryArgs);
    }
}
/*
function thirdCurry(func, paramerersCount)
{

}

function carry( func, parametersCount ) {
    func.length
    // сколько ожидается параметров
    function getCurryingFunction( previousArguments ) {
        return function( nextArguments ) {
            //ко нкатенация аргументов
            if(  ) {
                return func.apply( this,  )
            } else {
                return getCurryingFunction(   );
            }
        }
    }

    return getCurryingFunction([]);
}
*/
var res = curry(sum,5)(5,6,7,8,9);
//alert(res);

