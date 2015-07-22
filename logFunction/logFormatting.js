/**
 * Created by vitali.nalivaika on 20.07.2015.
 */

define([], function() {
        function Formatting() {
            'use strict';
            var self = this;

            self.defaultErrorObject = {
                name: 'property is not specified',
                message: 'property is not specified',
                extra: 'property is not specified',
                dateInfo: null
            };

            self.returnFormattedObject = function returnFormattedObject(objectToFormat) {
                var newFormattedObject = new Error();

                for(var prop in self.defaultErrorObject) {
                    newFormattedObject[prop] = objectToFormat[prop] || self.defaultErrorObject[prop];
                }
                newFormattedObject.dateInfo = objectToFormat.dateInfo || (new Date());

                return newFormattedObject;
            }
        }
        return new Formatting();
        }
);


