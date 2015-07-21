/**
 * Created by vitali.nalivaika on 20.07.2015.
 */

Logo.Formatting = (function() {
    'use strict';

    var defaultErrorObject = {
        name: 'property is not specified',
        message: 'property is not specified',
        extra: 'property is not specified',
        dateInfo: null
    };

    function registerObject(obj) {
        var newObject;
        var index;

        newObject = checkProperies(obj);
        newObject.index = Logo.Repository.addObject(newObject);
        return newObject; //вернули обьект с четко установленными параметрами и индексом для поиска себя же в repository
    }

    function checkProperies(obj) {
        var newObj = new Error();

        for(var prop in defaultErrorObject) {
            newObj[prop] = obj[prop] || defaultErrorObject[prop];
        }
        newObj.dateInfo = obj.dateInfo || (new Date());

        return newObj;
    }

    return {
        registerObject : registerObject
    };

})();