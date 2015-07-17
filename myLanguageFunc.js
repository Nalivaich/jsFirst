/**
 * Created by vitali.nalivaika on 15.07.2015.
 */

MyMiniLibrary.LANGUAGE_FUNCTIONS = (function() {
    'use strict';
    //private
    function isRightArguments(args) {
        for (var i = 0; i < args.length; i++) {
            if ((args[i] === undefined)) {
                return false;
            }
        }
        return true;
    }
    //public all
    function isArray(obj) {
        if (!isRightArguments(arguments)) {
            throw new Error('Invalid argument/s');
        } else {
            return (typeof obj === "object") && (obj instanceof Array);
        }
    }

    function isDate(obj) {
        if (!isRightArguments(arguments)) {
            throw new Error('Invalid argument/s');
        } else {
            return (typeof obj === "object") && (obj instanceof Date);
        }
    }

    function isFunction(obj) {
        if (!isRightArguments(arguments)) {
            throw new Error('Invalid argument/s');
        } else {
            return (typeof obj === "function") && (obj instanceof Function);
        }
    }

    function isNull(obj) {
        if (!isRightArguments(arguments)) {
            throw new Error('Invalid argument/s');
        } else {
            return (typeof obj === "object") && (obj === null);
        }
    }

    function isBoolean(obj) {
        if (!isRightArguments(arguments)) {
            throw new Error('Invalid argument/s');
        } else {
            return (typeof obj === "boolean");
        }
    }

    function isNumber(obj) {
        if (!isRightArguments(arguments)) {
            throw new Error('Invalid argument/s');
        } else {
            return (typeof obj === "number");
        }
    }

    function isUndefined(obj) {
        if (!isRightArguments(arguments)) {
            throw new Error('Invalid argument/s');
        } else {
            return (typeof obj === "undefined");
        }
    }

    function isString(obj) {
        if (!isRightArguments(arguments)) {
            throw new Error('Invalid argument/s');
        } else {
            return (typeof obj === "string");
        }
    }

    return {
        isArray : isArray,
        isDate : isDate,
        isFunction : isFunction,
        isNull: isNull,
        isBoolean : isBoolean,
        isNumber : isNumber,
        isUndefined : isUndefined,
        isString : isString
    };

})();


