/**
 * Created by vitali.nalivaika on 20.07.2015.
 */

Logger.Repository = (function() {

    Logger.BaseRepository = function() {

        //remove object by index
        function deleteObject(index) { }

        // add object in repository and returns element index
        function addObject(obj) { }

        //find and return object by index
        function findObject(index) { }

    };

    Logger.inMemoryRepository = function () {

        this.repository = [];

        Logger.inMemoryRepository.prototype.addObject = function(obj){
            this.repository.push(obj);
            return (this.repository.length - 1);
        };

        Logger.inMemoryRepository.prototype.deleteObject = function(index)
        {
            try {
                this.repository.splice(index, 1);
            } catch (e) {
                return false;
            }
            return true;

        };

        Logger.inMemoryRepository.prototype.findObject = function(index)
        {
            return this.repository[index];
        };


        //Logger.inMemoryRepository.constructor = Logger.inMemoryRepository;
    };

    Logger.inMemoryRepository.prototype = Object.create(new Logger.BaseRepository());

    var repositoryObject;

    function returnRepositoryObject() {
        if(!repositoryObject) {
            repositoryObject = new Logger.inMemoryRepository();
        }

        return repositoryObject;
    }

    function setNewRepository(newRepositoryObject) {
        if(typeof newRepositoryObject === "function") {
            if(newRepositoryObject instanceof Logger.BaseRepository) {
                repositoryObject = new newRepositoryObject();
                return;
            }
        } else if(Logger.BaseRepository.prototype.isPrototypeOf(newRepositoryObject)) {
            repositoryObject = newRepositoryObject;
            return;
        }
    throw new Error('Wrong object prototype');
    }

    return {
        returnRepositoryObject: returnRepositoryObject,
        setNewRepository : setNewRepository,
        BaseRepository: Logger.BaseRepository
    };


})();



//var pp = new Logger.inMemoryRepository();
//var bolVariable = (pp instanceof Logger.BaseRepository);
//alert(Logger.BaseRepository.prototype.isPrototypeOf(pp));

/*var er = new Error();
var er2 = new Error();
er.message = 'mes1';
var ppp = Logger.Repository.returnRepositoryObject();
ppp.addObject(er);
//alert(ppp.repository[0].message);
er2.message = 'mes2';
ppp.addObject(er2);
//alert(ppp.repository[1].message);*/



/*var pp = Logger.Repository.returnRepositoryObject();
for(var i = 0; i < pp.repository.length; i++) {
    alert(pp.repository[i]);
}*/
