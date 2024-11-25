"use strict";

var m = 100;
function outer() {
  var x = 10;
  for (var index = 0; index < 1; index++) {
    var _x = 30;
  }
  function inner() {
    var y = 20;
    console.log(x + y + m);
  }
  inner();
}
// var innerFnRef = outer()
// innerFnRef()
outer();