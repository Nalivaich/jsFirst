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
    function logFunction(obj, outputMethodName) {

        var newErrorObject;

        if(isObject(obj)) {
            newErrorObject = Logger.Registration.registerObject(obj);
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
Logger.Main.logFunction(errorObject, 'alerT');
/*Logger.Main.logFunction(errorObject, 'conSole');
Logger.Main.logFunction(errorObject, 'oFf');
Logger.Main.logFunction(errorObject, 'MyGreatApi');
Logger.Main.logFunction(errorObject, 'MyGreatApi');
Logger.Main.logFunction(errorObject, 'MyGreatApi');*/