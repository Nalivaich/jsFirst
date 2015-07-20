/**
 * Created by vitali.nalivaika on 20.07.2015.
 */

Logo.Output = (function() {
    'use strict';

   /* function showLogoInfo(index, methodString) {
        if(methodString === undefined) {
            return showObjectsAlert(index);
        } else {
            return choseOutput(methodString);
        }
    }*/

    function showLogoInfo(index,methodString) {
        switch (methodString) {
            case 'console':
                showObjects(index, ShowElementConsole);
                break;
            default:
                showObjects(index,ShowElementAlert);
        }
    }

    function showObjects(index, func) {
        if(index !== undefined) { //—делать проверку на границы длины массива
            func(Logo.Repository.repository[index]);
        } else {
            for(var i = 0; i < Logo.Repository.repository.length; i++) {
                func(Logo.Repository.repository[i]);
            }
        }
    }

    // ”Ѕ–ј“№ ƒ”ЅЋ»–”ёў»…—я  ќƒ!
    function ShowElementConsole(element) {
        console.log(
            'Name: ' + element.name + '\n\r' +
            'Message: ' + element.message + '\n\r' +
            'Extra: ' + element.extra + '\n\r' +
            'DateInfo: ' +  element.dateInfo );
    }

    function ShowElementAlert(element) {
        alert(
            'Name: ' + element.name + '\n\r' +
            'Message: ' + element.message + '\n\r' +
            'Extra: ' + element.extra + '\n\r' +
            'DateInfo: ' +  element.dateInfo );
    }

    return {
        showLogoInfo: showLogoInfo
    };

})();