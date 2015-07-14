/**
 * Created by vitali.nalivaika on 14.07.2015.
 */


/**
 * Created by vitali.nalivaika on 13.07.2015.
 */


var func1 = function (x, y, z)
{
    return x+y+z;
}
//alert(func1(5,6,4));
func1.apply(null,[5,6,4]);
var newFunc1 = func1.apply(null,[6,4,7]);
//alert(newFunc1);

var add = function(a,b){
    return a+b;
}
var add2 = add.bind(null, 2);
//alert(add2(10));

this.setup = function () {
    this.on('tweet', this.handleStreamEvent.bind(this, 'tweet'));
    this.on('retweet', this.handleStreamEvent.bind(this, 'retweet'));
};

function sum(x,y)
{return x+y};

/*function curry(func,a)
 {
 return function(b){
 return func(a,b);
 };
 }
 var makeSum = curry(sum,5);

 alert(makeSum(10));*/


function curry(func){
    var args = arguments, curryArgs =[];
    for(var i = 1; i< args.length;i++){
        curryArgs[i-1] = args[i];
    }
    return function(){
        var argsArr = Array.prototype.call(arguments , 0);
        curryArgs = curryArgs.concat(argsArr);
        return func.apply(this, curryArgs);
    }
}

var f1 = curry(sum,5,5);
//alert(curry(sum));


function noisy(f) {
    return function(arg) {
        console.log("calling with", arg);
        var val = f(arg);
        console.log("called with", arg, "- got", val);
        return val;
    };
}
//alert(noisy(Boolean)(0));


/*3*/
function multiplication(x,y)
{
    if(arguments[0]=== undefined || arguments[1]===undefined)
    {
        return -1;
    }

    return x*y;
}

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


/*4*/
function unfold(number)//ищет ближайшее меньшее, кратное двум число
{
    if(arguments[0]=== undefined)
    {
        return -1;
    }
    var result = number;
    if(result == 0)
        return -1;
    if((result%2)!=0)
        return result-1;
    else
        return result-2;
    return result-1;
}

function linearUnfold(counter,func)
{

    var result = [];
    if(arguments[0]=== undefined || arguments[1]===undefined)
    {
        return -1;
    }
    while(counter)
    {
        counter=func(counter);
        result.push(counter);
    }
    return result;
}

var var1 = 101;
//alert(linearUnfold(var1,unfold));



/*5*/
function changeElement(number)
{
    if(arguments[0]===undefined)
    {
        return -1;
    }
    return number*2;
}

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

/*6*/
function filter(array, func)
{
    if(arguments[0]=== undefined || arguments[1]===undefined)
    {
        return -1;
    }
    var result = [];
    for(var i=0;i<array.length;i++)
    {
        if(func(array[i]))
            result.push(array[i]);
    }
    return result;
}

var array6 = [1,2,3,4,5,6,7,8,9,10];
alert(filter(array6,function(number){ //фильтрует и оставляет только четные числа
    return ((number%2)== 0);
}));

/*9*/
function checkNumber(number)
{
    if(arguments[0]=== undefined)
    {
        return -1;
    }
    const c = 10;
    return (number>c);
}
function satisfy(array,func)
{
    if(arguments[0]=== undefined || arguments[1]===undefined)
    {
        return -1;
    }
    for(var i=0;i<array.length;i++)
    {
        if(func(array[i]))
            return array[i];
    }
}

var someArray=[4,6,7,8,9,10,77,88];
//alert(satisfy(someArray,checkNumber));