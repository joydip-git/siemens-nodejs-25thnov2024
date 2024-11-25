// var x
// x = 200
// console.log(x);

// function call() {
//     console.log(x);//undefined
//     var x //variable declaration
//     x = 10 //assignment
//     console.log(x);//10
//     for (var i = 0; i < 1; i++) {
//         var x
//         x = 20
//         console.log(x);//20
//     }
//     console.log(x);//20

//     inner()
//     function inner() {
//         var x
//         x = 100
//         console.log('inner');
//     }
//     //inner()

//     //another() => you can't
//     var another
//     another = function () {
//         console.log('another');
//     }
//     another()
// }
// call()


var x
x = 200
console.log(x);

function call() {
    //console.log(x);//undefined
    let x //variable declaration
    x = 10 //assignment
    console.log(x);//10
    for (var i = 0; i < 1; i++) {
        let x //_x
        x = 20 //_x
        console.log(x);//20
    }
    console.log(x);//20

    inner()
    function inner() {
        var x
        x = 100
        console.log('inner');
    }
    //inner()

    //another() => you can't
    var another
    another = function () {
        console.log('another');
    }
    another()
}
call()