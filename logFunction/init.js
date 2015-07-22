/**
 * Created by vitali.nalivaika on 22.07.2015.
 */

require(["jquery", "logMainJS"], function($, logMain) {

    var errorObject =  new Error('Invalid Value');
    var errorObject2 = new TypeError('TypeError');
    var errorObject3 = new DOMError('DOMError');
    var errorObject4 = new EvalError('EvalError');
    var errorObject5 = new URIError('URIError');

    logMain.logFunction(errorObject, 'alerT');
    logMain.logFunction(errorObject2, 'conSole');
    logMain.logFunction(errorObject, 'oFf');
    logMain.logFunction(errorObject3, 'MyGreatApi');
    logMain.logFunction(errorObject4, 'MyGreatApi');
    logMain.logFunction(errorObject5, 'MyGreatApi');
    // можно юзать
    //logMain.addOutputMethod();
    //logMain.setNewRepository();
});