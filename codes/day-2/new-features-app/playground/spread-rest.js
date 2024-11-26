//spread operator
var obj = {
    id: 1,
    name: 'anil',
    salary: 1000
}

var copy = { ...obj }
// for (let propName in obj) {
//     const propvalue = obj[propName]
//     copy[propName] = propvalue
// }
console.log(obj);
console.log(copy);

const numbers = [1, 2, 3, 4]
const copyNumbers = [...numbers, 10, 20]

console.log(numbers);
console.log(copyNumbers);

//rest operator
//it is used to declare an array which is part of the function's argument list and should be the last one always
//ONLY one such array can be declared
//array can not be declared locally with the rest operator, if that's not part of the function's argument list
function calculateAverageMarks(name, ...marks) {

    if (marks.length > 0) {
        let total = 0
        for (let mark of marks) {
            total += mark
        }
        return total / marks.length
    } else
        return 0
}
console.log(calculateAverageMarks('anil', 30, 40, 50))
console.log(calculateAverageMarks('sunil', 30, 40))