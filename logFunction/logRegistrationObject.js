/**
 * Created by vitali.nalivaika on 21.07.2015.
 */


define(["logFormatting", "logRepository", "jquery"],function(Formatting, Repository,$) {
        function Registration() {
            'use strict';
            var self = this;

            self.registerObject = function registerObject(inputObject) {
                var newFormattedObject;

                newFormattedObject = Formatting.returnFormattedObject(inputObject);
                newFormattedObject.index = Repository.returnRepositoryObject().addObject(newFormattedObject);

                return newFormattedObject;
            }
        }
        return new Registration();
        }
);







