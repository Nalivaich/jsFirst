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

            self.checkProperties = function checkProperties(obj) {
                var newObj = new Error();

                for(var prop in self.defaultErrorObject) {
                    newObj[prop] = obj[prop] || self.defaultErrorObject[prop];
                }
                newObj.dateInfo = obj.dateInfo || (new Date());

                return newObj;
            }
        }
        return new Formatting();
        }
);


