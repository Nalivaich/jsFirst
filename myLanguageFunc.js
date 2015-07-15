/**
 * Created by vitali.nalivaika on 15.07.2015.
 */

(function() {
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

    //public
    function isArray(obj) {
        if (isRightArguments(arguments)) {
            throw new Error('Invalid argument/s');
        } else {
            return (typeof obj === "object") && (obj instanceof Array);
        }
    }

    function isDate(obj) {
        if (isRightArguments(arguments)) {
            throw new Error('Invalid argument/s');
        } else {
            return (typeof obj === "object") && (obj instanceof Date);
        }
    }

    function isFunction(obj) {
        if (isRightArguments(arguments)) {
            throw new Error('Invalid argument/s');
        } else {
            return (typeof obj === "function") && (obj instanceof Function);
        }
    }

    function isNull(obj) {
        if (isRightArguments(arguments)) {
            throw new Error('Invalid argument/s');
        } else {
            return (typeof obj === "object") && (obj === null);
        }
    }

    function isBoolean(obj) {
        if (isRightArguments(arguments)) {
            throw new Error('Invalid argument/s');
        } else {
            return (typeof obj === "boolean");
        }
    }

    function isNumber(obj) {
        if (isRightArguments(arguments)) {
            throw new Error('Invalid argument/s');
        } else {
            return (typeof obj === "number");
        }
    }

    function isUndefined(obj) {
        if (isRightArguments(arguments)) {
            throw new Error('Invalid argument/s');
        } else {
            return (typeof obj === "undefined");
        }
    }

    function isString(obj) {
        if (isRightArguments(arguments)) {
            throw new Error('Invalid argument/s');
        } else {
            return (typeof obj === "string");
        }
    }


    /*var myObject = new Object();
     var myDate = new Date()
     var meArray = [];
     function return5(){return 5;}
     alert(isArray());*/
})();


