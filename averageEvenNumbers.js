/**
 * Created by vitali.nalivaika on 14.07.2015.
 */


function average(array)
{
    var newArray= myFunctionsJ.filter(array,myFunctionsJ.findEvenNumbers);
    var result =0;
    for(var i = 0;i< newArray.length;i++)
    {
        result+=newArray[i];
    }
    return result/newArray.length;
}
var arr = [1,2,3,4,5,6,4,5,6,6];
//alert(average(arr));
