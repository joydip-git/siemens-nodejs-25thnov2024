function filterValues(arr, fnRef) {
    const result = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (fnRef(element))
            result.push(element)
    }
    return result
}
//const numbers = [1, 2, 3, 4]
const numbers = new Array(1, 2, 3, 4)
// numbers.push(10, 20, 30)
// console.log(numbers);
// numbers.splice(2, 2, 300, 400, 500)
// console.log(numbers);

const isEven = (num) => num % 2 === 0;
//const evenNumbers = filterValues(numbers, isEven)
const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers);

//const isOdd = (num) => num % 2 !== 0
// const oddNumbers = filterValues(numbers, (num) => num % 2 !== 0)
const oddNumbers = numbers.filter((num) => num % 2 !== 0)
console.log(oddNumbers);

const squaredNumbers = numbers.map(
    (num) => { return num * num }
)
console.log(squaredNumbers);
numbers.sort((a, b) => b - a)
console.log(numbers);
numbers.find(num => num === 4)
numbers.findIndex(num => num === 4)

