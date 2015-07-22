/**
 * Created by vitali.nalivaika on 20.07.2015.
 */

Logger.Main = (function() {
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

    function isObject(obj) {
        if (!isRightArguments(arguments)) {
            return false;
        } else {
            return (typeof obj === "object") && (obj instanceof Object);
        }
    }

    //return index obj in repository
    function logFunction(obj, formattingFunc, outputMethodName) {
        var checkFunc;
        var newErrorObject;
        //убрать второй параметр : formattingFunc
        if(formattingFunc === undefined) {
            checkFunc = Logger.Registration.registerObject;
        } else {
            checkFunc = formattingFunc;
        }

        if(isObject(obj)) {
            newErrorObject = checkFunc(obj);
            Logger.Output.showLogInfo(newErrorObject.index, outputMethodName); //выводим значения обьекта уже из репозитория
            return newErrorObject.index; //возвращаем индекс залогированного обьекта в репозитории
            //return sth output func
        } else {
            return alert("It is not the object at the entrance");
        }
    }
    return {
        logFunction : logFunction
    };

})();



var errorObject =  (new Error());
errorObject.message = 'some message';
//Logger.Output.showObjectsAlert(errorObject);
Logger.Main.logFunction(errorObject );
Logger.Main.logFunction(errorObject);
Logger.Main.logFunction(errorObject);