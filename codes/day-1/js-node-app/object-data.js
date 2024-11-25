"use strict"
//constructor function
function call(value) {
    //local variable
    var xVar = 10
    console.log(xVar);

    //object data
    this.xData = value
    console.log(this);
    return this
}
var obj1 = new call(100)
//call(200)
console.log(global);
console.log(obj1);
//console.log(obj2);
