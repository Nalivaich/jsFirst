/**
 * Created by vitali.nalivaika on 20.07.2015.
 */

define(["logRepository"], function(Repository) {
        function Output() {
            'use strict';
            var self = this;
            var outputMethodObject = {
                console: function(index){
                    showObjects(index,showElementConsole);
                },
                alert: function(index){
                    showObjects(index, showElementAlert);
                },
                off: function() {
                    console.log('Output is disabled');
                }
            };

            function isNameInObject(object, nameValue) {
                return !!object[nameValue];
            }

            //Add new property in outputMethodObject object
            self.addOutputMethod = function addOutputMethod(outputMethod, methodName) {
                //if(!methodName || outputMethod ) //maybe that
                if(methodName === undefined || outputMethod === undefined) {
                    return  new Error('Wrong argument/s');
                }

                if(typeof methodName !== "string") {
                    return new Error('"methodName" should be a string');
                }

                if(isNameInObject(outputMethod, methodName)) {
                    return new Error('This name already exists.' + '\n\r' + 'Try a different name');
                }

                if(typeof outputMethod === "function") {
                    var newPropertyName = methodName.toLowerCase();

                    outputMethodObject[newPropertyName] = outputMethod;
                } else {
                    return new Error('Wrong argument');
                }
            };

            self.showLogInfo = function showLogInfo(index, outputMethodName) {
                //isString?

                if(outputMethodName !== undefined) {
                    if(typeof outputMethodName !== "string" || outputMethodName == '') {
                        return new Error('Wrong argument');
                    }
                }

                outputMethodName = (outputMethodName || 'console').toLowerCase();


                if( isNameInObject(outputMethodObject, outputMethodName)) {
                    outputMethodObject[outputMethodName](index);
                } else {
                    outputMethodObject['console'](index)
                }
            };

            function showObjects(index, func) {
                if(index !== undefined) {
                    func(Repository.returnRepositoryObject().repository[index]);
                } else {
                    for(var i = 0; i < Repository.returnRepositoryObject().repository.length; i++) {
                        func(Repository.returnRepositoryObject().repository[i]);
                    }
                }
            }

            function showElementConsole(element) {
                console.log(returnFormattingString(element));
            }

            function showElementAlert(element) {
                alert(returnFormattingString(element));
            }

            function returnFormattingString(element) {
                return ('Name: ' + element.name + '\n\r' +
                'Message: ' + element.message + '\n\r' +
                'Extra: ' + element.extra + '\n\r' +
                'DateInfo: ' +  element.dateInfo );
            }
        }
        return new Output();
    }
);


