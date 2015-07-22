/**
 * Created by vitali.nalivaika on 22.07.2015.
 */

require(["jquery", "logMainJS"], function($, logMain) {

    var errorObject =  (new Error());
    errorObject.message = 'some message';
    logMain.logFunction(errorObject, 'alerT');
    logMain.logFunction(errorObject, 'conSole');
    logMain.logFunction(errorObject, 'oFf');
    logMain.logFunction(errorObject, 'MyGreatApi');
    logMain.logFunction(errorObject, 'MyGreatApi');
    logMain.logFunction(errorObject, 'MyGreatApi');
    // можно юзать
    logMain.addOutputMethod();
    logMain.setNewRepository();
});