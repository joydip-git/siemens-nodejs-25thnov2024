// const add = (a, b) => a + b
// console.log(add(12, 3));
// console.log(module);

var addModule = (
    function (message) {
        const add = (a, b) => a + b
        console.log(add(12, 3));
        console.log(message);

    }
)

//addModule('hello')
module.exports = addModule
