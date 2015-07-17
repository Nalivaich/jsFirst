/**
 * Created by vitali.nalivaika on 15.07.2015.
 */


if (typeof MyMiniLibrary === "undefined") {
 var MyMiniLibrary = {};
}


var p = function() {
 return 2;
};

//Супер круто работающая функция
function extend(Child, Parent) {
  var F = function() { };
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
  Child.superclass = Parent.prototype;
}



//alert(p.prototype.constructor.prototype.constructor.prototype.constructor());// :)

