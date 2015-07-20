/**
 * Created by vitali.nalivaika on 20.07.2015.
 */

Logo.Formatting = (function() {
    'use strict';

    function registerObject(obj) {
        var newObject;
        var index;

        newObject = checkProperies(obj);
        newObject.index = Logo.Repository.addObject(newObject);
        return newObject; //вернули обьект с четко установленными параметрами и индексом для поиска себя же в repository
    }

    function checkProperies(obj) {
        var newObj = new Error();
        newObj.name = (obj.name === undefined) ? 'property is not specified' : obj.name;
        newObj.message = (obj.message === undefined) ? 'property is not specified' : obj.message;
        newObj.extra = (obj.extra === undefined) ? 'property is not specified' : obj.extra;
        newObj.dateInfo = (obj.dateInfo === undefined) ? (new Date()) : obj.dateInfo;
        return newObj;
    }

    return {
        registerObject : registerObject
    };

})();