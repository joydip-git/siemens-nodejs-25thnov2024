let m = 100
function outer() {
    //console.log(x);
    let x = 10
    for (let index = 0; index < 1; index++) {
        let x = 30
    }
    function inner() {
        let y = 20
        console.log(x + y + m);
    }
    inner()
}
// var innerFnRef = outer()
// innerFnRef()
outer()