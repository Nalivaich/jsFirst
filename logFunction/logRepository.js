/**
 * Created by vitali.nalivaika on 20.07.2015.
 */

Logger.BaseRepository = (function() {
    'use strict';


    //remove object by index
    function deleteObject(index) { }

    // add object in repository and returns element index
    function addObject(obj) { }

    //find and return object by index
    function findObject(index) { }

    return {
        deleteObject : deleteObject,
        addObject : addObject,
        findObject : findObject
    };

})();

Logger.inMemoryRepository = (function() {
    'use strict';

    var repository = [];

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

    return {
        deleteObject: deleteObject,
        addObject : addObject,
        findObject : findObject,
        repository : repository
    };


})();

Logger.inMemoryRepository = function () {

};
Logger.inMemoryRepository.prototype = new BaseRepository();
Logger.inMemoryRepository.prototype.addObject = function(){

};

Logger.inMemoryRepository.prototype.deleteObject = function()
{

};

Logger.setRepositoryMethods = (function() {
    'use strict';

    function extend(Child, Parent) {
        var F = function() { };
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.superclass = Parent.prototype;
    }

    var baseRepositoryObject = Logger.BaseRepository;
    var inMemoryRepositoryObject =  Logger.inMemoryRepository;
    extend(inMemoryRepositoryObject, baseRepositoryObject);
    var repositoryActionsObject =  inMemoryRepositoryObject;

    function fillRepository(obj) {

        extend(obj, baseRepositoryObject);
       /* if(obj.addObject === undefined) {
            obj.addObject = Logger.Repository.addObject;
        }

        if(obj.deleteObject === undefined) {
            obj.deleteObject = Logger.Repository.deleteObject;
        }

        if(obj.findObject === undefined) {
            obj.findObject = Logger.Repository.findObject;
        }

        if(obj.addObject === undefined) {
            obj.repository = Logger.Repository.repository;
        }*/
        return obj;
    }


})();

