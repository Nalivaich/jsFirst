/**
 * Created by vitali.nalivaika on 20.07.2015.
 */

Logo.Output = (function() {
    'use strict';

   /* function showLogoInfo(index, methodString) {
        if(methodString === undefined) {
            return showObjectsAlert(index);
        } else {
            return choseOutput(methodString);
        }
    }*/
    // добавить функцию, которая может добавлять проперти к обьекту, они д.б. функциями

    var outputMethodObject = {
        console: function(index){
            showObjects(index,showElementConsole);
        },
        alert: function(index){
            showObjects(index, showElementAlert);
        }
    };

    function isNameInObject(object, nameValue) {
        return !!object[nameValue];
    }


    //Add new property in outputMethodObject object
    function addOutputMethod(outputMethod, methodName) {
        if(methodName === undefined || outputMethod === undefined) {
            return alert('Wrong argument/s');
        }

        if(typeof methodName !== "string") {
            return alert('"methodName" should be a string');
        }

        if(isNameInObject(outputMethod, methodName)) {
            return alert('This name already exists.' + '\n\r' + 'Try a different name');
        }

        if(typeof outputMethod === "function") {
            var newPropertyName = methodName.toLowerCase();

            outputMethodObject[newPropertyName] = outputMethod;
        } else {
            return alert('Wrong argument');
        }
    }


    function showLogoInfo(index, outputMethodName) {
        //isString?
        outputMethodName = (outputMethodName || 'console').toLowerCase();

        if( isNameInObject(outputMethodObject, outputMethodName)) {
            outputMethodObject[outputMethodName](index);
        }
    }


    function showObjects(index, func) {
        if(index !== undefined) { //Сделать проверку на границы длины массива
            func(Logo.Repository.repository[index]);
        } else {
            for(var i = 0; i < Logo.Repository.repository.length; i++) {
                func(Logo.Repository.repository[i]);
            }
        }
    }

    function showElementConsole(element) {
        console.log(returnFormattingString(element));
    }

    function showElementAlert(element) {
        alert(returnFormattingString(element));
    }

    function returnFormattingString(element) {
        return ('Name: ' + element.name + '\n\r' +
        'Message: ' + element.message + '\n\r' +
        'Extra: ' + element.extra + '\n\r' +
        'DateInfo: ' +  element.dateInfo );
    }

    return {
        showLogoInfo: showLogoInfo
    };

})();