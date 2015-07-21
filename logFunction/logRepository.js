/**
 * Created by vitali.nalivaika on 20.07.2015.
 */


/**
 * Created by vitali.nalivaika on 20.07.2015.
 */
Logo.BaseRepository = (function() {

    var repository = [];

    //remove object by index
    function deleteObject(index) { }

    // add object in repository and returns element index
    function addObject(obj) { }

    //find and return object by index
    function findObject(index) { }

    return {
        deleteObject : deleteObject,
        addObject : addObject,
        findObject : findObject,
        repository : repository
    };

})();

Logo.Repository = (function() {
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
        deleteObject : deleteObject,
        addObject : addObject,
        findObject : findObject,
        repository : repository
    };


})();