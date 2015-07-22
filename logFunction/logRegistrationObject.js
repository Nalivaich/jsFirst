/**
 * Created by vitali.nalivaika on 21.07.2015.
 */


Logger.Registration = (function() {
    'use strict';

    function registerObject(obj) {
        var newObject;

        newObject = Logger.Formatting.checkProperties(obj);
        newObject.index = Logger.Repository.returnRepositoryObject().addObject(newObject);

        return newObject; //������� ������ � ����� �������������� ����������� � �������� ��� ������ ���� �� � repository
    }

    return {
        registerObject : registerObject
    };

})();