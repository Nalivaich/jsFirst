/**
 * Created by vitali.nalivaika on 22.07.2015.
 */

define(["logFormatting", "logRepository", "logRegistrationObject", "logOutput" ,"jquery"], function(Formatting, Repository, Registration, Output, $) {
    'use strict';

    function LoggerJS() {
        var self = this;
        self.addOutputMethod = Output.addOutputMethod;
        self.setNewRepository = Repository.setNewRepository;
        self.BaseRepository = Repository.BaseRepository;

        function isRightArguments(args) {
            for (var i = 0; i < args.length; i++) {
                if ((args[i] === undefined)) {
                    return false;
                }
            }
            return true;
        }

        function isObject(obj) {
            if (!isRightArguments(arguments)) {
                return false;
            } else {
                return (typeof obj === "object") && (obj instanceof Object);
            }
        }

        //return index errorObject in repository
        self.logFunction = function logFunction(inputObject, outputMethodName) {
            var newErrorObject;

            if (isObject(inputObject)) {
                newErrorObject = Registration.registerObject(inputObject);
                Output.outputLoggerObject(newErrorObject.index, Repository.returnRepositoryObject().repository, outputMethodName);

                return newErrorObject.index;
            } else {
                return new Error("It is not the object at the entrance");
            }
        };

    }
    return new LoggerJS();
});


