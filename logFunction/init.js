/**
 * Created by vitali.nalivaika on 22.07.2015.
 */

require(["jquery", "logMainJS"], function($, logMain) {

    var errorObject =  new Error('Invalid Value');
    var errorObject2 = new TypeError('TypeError');
    var errorObject3 = new DOMError('DOMError');
    var errorObject4 = new EvalError('EvalError');
    var errorObject5 = new URIError('URIError');

    // �������� �����������
    /*logMain.logFunction(errorObject, 'alerT');
    logMain.logFunction(errorObject2, 'conSole');
    logMain.logFunction(errorObject, 'oFf');
    logMain.logFunction(errorObject3, 'MyGreatApi');
    logMain.logFunction(errorObject4, 'MyGreatApi');
    logMain.logFunction(errorObject5, 'MyGreatApi');*/
    // ����� �����


    //�������� ������ �����������
    //c instanceOff ����� ��������, �������� ����������
    /*var demoRepository = function() {

        this.repository = [];

        demoRepository.prototype.addObject = function(obj){
            alert('Hello from demoRepository');
            this.repository.push(obj);
            return (this.repository.length - 1);
        };

        demoRepository.prototype.deleteObject = function(index)
        {
            alert('Hello from demoRepository');
            try {
                this.repository.splice(index, 1);
            } catch (e) {
                return false;
            }
            return true;

        };

        demoRepository.prototype.findObject = function(index)
        {
            alert('Hello from demoRepository');
            return this.repository[index];
        };


        //Logger.inMemoryRepository.constructor = Logger.demoRepository;
    };
    demoRepository.prototype = Object.create(new logMain.BaseRepository());
    var obj = new demoRepository();
    //������� �����������
    logMain.setNewRepository(demoRepository);
    logMain.logFunction(errorObject3, 'MyGreatApi');
    // ������� ������
    logMain.setNewRepository(obj);
    logMain.logFunction(errorObject4, 'MyGreatApi');*/


    //�������� ������ ������� ������
    /*function returnFormattingString(element) {
            alert('\tHELLO FROM demoOutput!' + '\n\r' +
                'Name: ' + element.name + '\n\r' +
                'Message: ' + element.message + '\n\r' +
                'DateInfo: ' +  element.dateInfo );
        }

    function demoOutput(indexInRepository, RepositoryObject) {

         if(indexInRepository !== undefined) {
             returnFormattingString(RepositoryObject[indexInRepository]);
         } else {
             for(var i = 0; i < RepositoryObject.length; i++) {
                 returnFormattingString(RepositoryObject[i]);
             }
         }
    }

    logMain.addOutputMethod(demoOutput, 'demoOutput');
    logMain.logFunction(errorObject5, 'demoOutput');*/

});