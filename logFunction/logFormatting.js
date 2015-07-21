/**
 * Created by vitali.nalivaika on 20.07.2015.
 */

Logger.Formatting = (function() {
    'use strict';

    var defaultErrorObject = {
        name: 'property is not specified',
        message: 'property is not specified',
        extra: 'property is not specified',
        dateInfo: null
    };

    //change defaultErrorObject object: add new property
    /*function addFormattingProperty(propertyName, propertyValue) {
        if( !propertyName  || !propertyValue ) {
            return alert('Wrong argument/s');
        }

        if(typeof propertyName !== "string" || typeof propertyValue !== "string" ) {
            return alert('Wrong argument/s');
        }

        defaultErrorObject[propertyName] = propertyValue;
    }*/

    function checkProperties(obj) {
        var newObj = new Error();

        for(var prop in defaultErrorObject) {
            newObj[prop] = obj[prop] || defaultErrorObject[prop];
        }
        newObj.dateInfo = obj.dateInfo || (new Date());

        return newObj;
    }

    return {
        checkProperties : checkProperties
    };

})();