/*
function call() {
    this.xData = 100
    this.show = () => {
        console.log(this.xData);
        console.log(this);
    }
}
var callObj = new call()
callObj.show()

var showFn = callObj.show;
//showFn = showFn.bind(callObj)
showFn()

//func()
//new func()
//ref.func()
*/
function outer() {
    this.xData = 100
    //const ref = this
    // function inner() {
    //     this.yData = 200
    //     console.log(ref.xData + this.yData);
    //     //console.log(this.xData + this.yData);
    // }
    // function inner() {
    //     this.yData = 200
    //     console.log(this.xData + this.yData);
    //     //console.log(this.xData + this.yData);
    // }
    // inner = inner.bind(this)
    let inner = () => {
        this.yData = 200
        console.log(this.xData + this.yData);
        //console.log(this.xData + this.yData);
    }
    //inner = inner.bind(this)
    inner()
}
new outer()
