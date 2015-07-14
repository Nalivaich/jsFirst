/**
 * Created by vitali.nalivaika on 14.07.2015.
 */

myFunctionsJ.linearUnfold =linearUnfold;

function unfold(number)//ищет ближайшее меньшее, кратное двум число
{
    if (arguments[0] === undefined) {
        return -1;
    }
    var result = [];
    while(number) {
        if (number === 0) {
            number = -1;
        }
        if ((number % 2) != 0) {
            result.push(number - 1);
            number -= 1;
        } else {
            result.push(number - 2);
            number -= 2;
        }
    }
    return result;
}

function linearUnfold(counter,func)
{
    if(arguments[0] === undefined || arguments[1] === undefined) {
        throw new Error('Error');
    }
    if (typeof func !== 'function') {
        throw new Error('The second arguments must be function!');
    }
    return func(counter);
}

var var1 = 101;
//alert(unfold(101));
