/**
 * Created by vitali.nalivaika on 21.07.2015.
 */


Logger.Registration = (function() {
    'use strict';

    function registerObject(obj) {
        var newObject;

        newObject = Logger.Formatting.checkProperties(obj);
        newObject.index = Logger.inMemoryRepository.addObject(newObject);

        return newObject; //вернули обьект с четко установленными параметрами и индексом для поиска себя же в repository
    }

    return {
        registerObject : registerObject
    };

})();