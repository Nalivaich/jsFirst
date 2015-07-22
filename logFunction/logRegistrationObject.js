/**
 * Created by vitali.nalivaika on 21.07.2015.
 */


define(["logFormatting", "logRepository", "jquery"],function(Formatting, Repository,$) {
        function Registration1() {
            'use strict';
            var self = this;

            self.registerObject = function registerObject(obj) {
                var newObject;

                newObject = Formatting.checkProperties(obj);
                newObject.index = Repository.returnRepositoryObject().addObject(newObject);

                return newObject;
            }
        }
        return new Registration1();
        }
);







