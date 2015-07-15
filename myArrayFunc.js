/**
 * Created by vitali.nalivaika on 15.07.2015.
 */
(function() {
    'use strict';
    //accept an function and array for iteration
    //used to iterate over the array iterative
    function forEach(func, array) {
        for (var i = 0; i < array.length; i++) {
            func(array[i], i, array);
        }
    }

    /*
     function func2(i){alert(i++)}
     var ii = [1,2,3]
     forEach(func2,ii);*/

    function more5(number) {
        return (number > 5) ? true : false;
    }


    function select(array, func) {
        var newArray = [];

        for(var i = 0; i<array.length; i++) {
            newArray = func(array[i]);
        }

        return newArray;
    }


    //accepts an array and converts function
    //returns array with all the new values
    function where(array, func) {
        var newArray = [];

        for (var i = 0, j = 0; i < array.length; i++) {
            if (func(array[i])) {
                newArray[j] = array[i];
                j++
            }
        }

        return newArray;
    }

    var rrr = [0, 5, 6, 4, 1, 2, 3, 7, 3];
    //alert(where(rrr,more5));


    //accepts an array and filter function
    //returns the first element of the filtered array
    function first(array, func) {
        var newArray;

        newArray = where(array, func);
        return (newArray.length !== 0 ) ? newArray[0] : 'no element to return';
    }

    //alert(first(rrr,more5));

    //accepts an array and filter function
    //returns the last element of the filtered array
    function last(array, func) {
        var newArray;

        newArray = where(array, func);
        return (newArray.length !== 0 ) ? newArray[newArray.length - 1] : 'no element to return';
    }

    //alert(last(rrr,more5));


    //private
    function isEquals(number1, number2) {
        return (number1 === number2) ? true : false;
    }

    //accepts an array and some number
    //returns an array from which removed all of these numbers
    function skipNumber(array, number) {
        var newArray = [];

        for (var i = 0, j = 0; i < array.length; i++) {
            if (!isEquals(number, array[i])) {
                newArray[j] = array[i];
                j++;
            }
        }
        return newArray;
    }

    var arr4 = [];
    //alert(skipNumber(arr4,4));

    //accepts an array and some number
    //returns new array with N(number) first elements missing
    function skip(array, number) {
        var newArray = [];
        if (array.length < number) {
            return 'Array too small';
        } else {
            for (var i = number, j = 0; i < array.length; i++) {
                newArray[j] = array[i];
                j++
            }
        }
        return newArray;
    }

    //accepts an array and some number
    //returns new array consisting of the first N(number) elements
    var someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //alert(skip(someArr,5));

    function take(array, number) {
        var newArray = [];
        if (array.length < number) {
            return 'Array too small';
        } else {
            for (var i = 0; i < number; i++) {
                newArray[i] = array[i];
            }
        }
        return newArray;
    }

    //alert(take(someArr,10));


    //accepts an array and predicate function
    //returns array with the new values while conditions are met
    /*function where(array, func) {
        var newArray = [];

        for (var i = 0, j = 0; i < array.length; i++) {
            if (func(array[i])) {
                newArray[j] = array[i];
                j++;
            } else {
                return newArray;
            }
        }

        return newArray;
    }
    */
    /*var fff = [6,6,3,6,1,9];
     alert(where(fff,more5));*/

})();