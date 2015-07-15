/**
 * Created by vitali.nalivaika on 14.07.2015.
 */
(function() {
    'use strict';

    /*Functional Programming examples*/

    function sum() {

        var result = 0;

        for (var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }

        return result;

    }

    function multiplication(counter, array) {
        if (arguments[0] === undefined || arguments[1] === undefined) {
            throw new Error('Error');
        }

        for (var i = 0; i < array.length; i++) {
            counter *= array[i];
        }

        return counter;
    }

    function unfold(number) {
        if (arguments[0] === undefined) {
            throw new Error('Error');
        }

        var result = [];

        while (number) {
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

    function changeElement(number) {
        if (arguments[0] === undefined) {
            throw new TypeError('Error!');
        }

        return number * 2;
    }

    function average(counter, array) {
        var result = 0;

        for (var i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result / array.length;
    }

    function giveRandomArray(number, max, min) {
        var maxValue;
        var minValue;
        var result = [];

        if (arguments[0] === undefined) {
            return -1;
        }

        maxValue = (arguments[1] === undefined) ? 100 : max;
        minValue = (arguments[2] === undefined) ? 0 : min;

        for (var i = 0; i < number; i++) {
            result.push(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
        }

        return result;
    }

    function checkNumber(number) {
        if (arguments[0] === undefined) {
            return -1;
        }

        const SATISFY_VALUE = 10;
        return (number > SATISFY_VALUE);
    }


    //Partial Application
    var res1 = MyFunctionsJ.partial(sum, 5);
    //alert(res1(5,6,7,8,9));

    //Currying
    var res2 = sum.curry(3);
    //alert(res2(5)(5)(5));

    //Linear fold
    var array3 = [1, 2, 3, 4, 5];
    //alert(MyFunctionsJ.linearFold(array3, 1, multiplication));

    //Linear unfold
    var number4 = 101;
    //alert(MyFunctionsJ.linearUnfold(101, unfold));

    //Map
    var number5 = [1, 4, 9];
    //alert(MyFunctionsJ.makeMap(number5, changeElement));

    //Filter
    var array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    /*alert(MyFunctionsJ.filter(array6, function(number) { //фильтрует и оставл€ет только четные числа
    return ((number%2)== 0);
     }));*/

    //Average of even numbers
    var array7 = [1, 2, 3, 4, 5, 6, 4, 5, 6, 6];
    //alert(MyFunctionsJ.averageEvenNumbers(array7, MyFunctionsJ.average));

    //Sum of random numbers
    //alert(MyFunctionsJ.sumRandomNumbers(10,MyFunctionsJ.giveRandomArray));

    //First
    var array9 = [4, 6, 7, 8, 9, 10, 77, 88];
    //alert(MyFunctionsJ.first(array9,checkNumber));

    //Memoization
    var varMemo = MyFunctionsJ.memoization(sum);
    //alert(varMemo(5,5));//ѕри желании можно зачечь врем€
    //alert(varMemo(5,5));

    //Lazy evaluation
    //U can use this function :) MyFunctionsJ.lazyEval()



})();