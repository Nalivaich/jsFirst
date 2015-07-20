/**
 * Created by vitali.nalivaika on 20.07.2015.
 */

Logo.Main = (function() {
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
    function logFunction(obj,formattingFunc) {
        var checkFunc;
        var newErrorObject;

        if(formattingFunc === undefined) {
            checkFunc = Logo.Formatting.registerObject;
        } else {
            checkFunc = formattingFunc;
        }

        if(isObject(obj)) {
            newErrorObject = checkFunc(obj);
            Logo.Output.showLogoInfo(newErrorObject.index); //выводим значения обьекта уже из репозитория
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
//Logo.Output.showObjectsAlert(errorObject);
Logo.Main.logFunction(errorObject);
Logo.Main.logFunction(errorObject);
Logo.Main.logFunction(errorObject);