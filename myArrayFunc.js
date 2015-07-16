/**
 * Created by vitali.nalivaika on 15.07.2015.
 */
ARRAY_FUNCTIONS = (function() {
    'use strict';

    //private
    function isEquals(number1, number2) {
        return (number1 === number2) ? true : false;
    }

    function more5(number) {
        return (number > 5) ? true : false;
    }

    //public
    //accept an function and array for iteration
    //used to iterate over the array iterative
    function forEach(func, array) {
        for (var i = 0; i < array.length; i++) {
            func(array[i], i, array);
        }
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

    //accepts an array and filter function
    //returns the first element of the filtered array
    function first(array, func) {
        var newArray;

        newArray = where(array, func);
        return (newArray.length !== 0 ) ? newArray[0] : 'no element to return';
    }

    //accepts an array and filter function
    //returns the last element of the filtered array
    function last(array, func) {
        var newArray;

        newArray = where(array, func);
        return (newArray.length !== 0 ) ? newArray[newArray.length - 1] : 'no element to return';
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

    var asChain = function (targetArray) {
        if (!Array.isArray(targetArray)) {
            throw new TypeError('Incorrect input: argument is not an Array.');
        }
        var arrayForReturn = targetArray;

        return{
            forEach: function (action) {
                arrayForReturn = forEach(arrayForReturn, action);
                return this;
            },
            where: function (predicate) {
                arrayForReturn = where(arrayForReturn, predicate);
                return this;
            },
            first: function (predicate) {
                arrayForReturn = first(arrayForReturn, predicate);
                return this;
            },
            last: function (predicate) {
                arrayForReturn = last(arrayForReturn, predicate);
                return this;
            },
            select: function (selector) {
                arrayForReturn = select(arrayForReturn, selector);
                return this;
            },

            skip: function(count) {
                arrayForReturn = skip(arrayForReturn, count);
                return this;
            },

            take: function(count) {
                arrayForReturn = take(arrayForReturn, count);
                return this;
            },

            result: function() {
                return arrayForReturn;
            }
        };
    };

    var array1 = [0, 5, 6, 4, 1, 2, 3, 7, 3];
    var someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var array4 = [];
    //alert(where(array1,more5));

    //alert(first(array1,more5));

    //alert(last(array1,more5));

    //alert(skipNumber(arr4,4));

    //alert(skip(someArr,5));

    //alert(take(someArr,10));

    return {
        forEach : forEach,
        where : where,
        first : first,
        last : last,
        select : select,
        skip : skip,
        skipNumber : skipNumber,
        take : take,
        asChain: asChain
    };

})();

//alert(ARRAY_FUNCTIONS.asChain([1,2,3,4,5,6,7,8,9]).take(6).skip(3).result());