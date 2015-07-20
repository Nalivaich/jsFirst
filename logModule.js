/**
 * Created by vitali.nalivaika on 20.07.2015.
 */

(function() {
    'use strict';

    var repository = [];

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
    function isObject(obj) {
        if (!isRightArguments(arguments)) {
            return false;
        } else {
            return (typeof obj === "object") && (obj instanceof Object);
        }
    }


    //public
    //return index obj in repository
    function logFunction(obj,func) {
        var checkFunc;
        var newErrorObject;

        if(func === undefined) {
            checkFunc = registerObject;
        } else {
            checkFunc = func;
        }

        if(isObject(obj)) {
            newErrorObject = checkFunc(obj);
            showObjectsAlert(newErrorObject.index); //������� �������� ������� ��� �� �����������
            return newErrorObject.index; //���������� ������ ��������������� ������� � �����������
            //return sth output func
        } else {
            return alert("It is not the object at the entrance");
        }
    }

    function registerObject(obj) {
        var newObject;
        var index;

        newObject = checkProperies(obj);
        newObject.index = addObject(newObject);
        return newObject; //������� ������ � ����� �������������� ����������� � �������� ��� ������ ���� �� � repository
    }

    function checkProperies(obj) {
        var newObj = new Error();
        newObj.name = (obj.name === undefined) ? 'property is not specified' : obj.name;
        newObj.message = (obj.message === undefined) ? 'property is not specified' : obj.message;
        newObj.extra = (obj.extra === undefined) ? 'property is not specified' : obj.extra;
        newObj.dateInfo = (obj.dateInfo === undefined) ? (new Date()) : obj.dateInfo;
        return newObj;
    }

    //remove object by index
    function deleteObject(index) {
        try {
            repository.splice(index, 1);
        } catch (e) {
            return false;
        }
        return true;
    }

    // add object in repository and returns element index
    function addObject(obj) {
        repository.push(obj);
        return (repository.length - 1);
    }

    //find and return object by index
    function findObject(index) {
        return repository[index];
    }

    function showObjectsAlert(index) {
        if(index !== undefined) { //������� �������� �� ������� ����� �������
            ShowElementAlert(repository[index]);
        } else {
            for(var i = 0; i < repository.length; i++) {
                ShowElementAlert(repository[i]);
            }
        }
    }

    function ShowElementAlert(element) {
        alert('Name: ' + element.name + '\n\r' +
            'Message: ' + element.message + '\n\r' +
            'Extra: ' + element.extra + '\n\r' +
            'DateInfo: ' +  element.dateInfo );
    }


    var errorObject =  checkProperies(new Error());
    errorObject.message = 'some message';
    //ShowElementAlert(errorObject);
    //logFunction(errorObject);
})();