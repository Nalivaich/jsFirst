/**
 * Created by vitali.nalivaika on 20.07.2015.
 */

define([], function() {
        function Repository() {
            var self = this;

            var BaseRepository = function() {

                //remove object by index
                function deleteObject(index) { }

                // add object in repository and returns element index
                function addObject(obj) { }

                //find and return object by index
                function findObject(index) { }

            };

            var inMemoryRepository = function () {

                this.repository = [];

                inMemoryRepository.prototype.addObject = function(obj){
                    this.repository.push(obj);
                    return (this.repository.length - 1);
                };

                inMemoryRepository.prototype.deleteObject = function(index)
                {
                    try {
                        this.repository.splice(index, 1);
                    } catch (e) {
                        return false;
                    }
                    return true;

                };

                inMemoryRepository.prototype.findObject = function(index)
                {
                    return this.repository[index];
                };


                //Logger.inMemoryRepository.constructor = Logger.inMemoryRepository;
            };

            inMemoryRepository.prototype = Object.create(new BaseRepository());

            var repositoryObject;

            self.returnRepositoryObject = function returnRepositoryObject() {
                if(!repositoryObject) {
                    repositoryObject = new inMemoryRepository();
                }

                return repositoryObject;
            };

            self.setNewRepository = function setNewRepository(newRepositoryObject) {
                if(!newRepositoryObject) {
                    throw new Error('Wrong Argument');
                }

                if(typeof newRepositoryObject === "function") {
                    if(newRepositoryObject instanceof BaseRepository) {
                        repositoryObject = new newRepositoryObject();
                        return;
                    }
                } else if(BaseRepository.prototype.isPrototypeOf(newRepositoryObject)) {
                    repositoryObject = newRepositoryObject;
                    return;
                }
                throw new Error('Wrong object prototype');
            };

        }
        return new Repository();
        }
);
