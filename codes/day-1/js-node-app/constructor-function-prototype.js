//construction function syntax
function person(id, name, salary) {
    this.id = id
    this.name = name
    this.salary = salary
    this.show = function () {
        return `Name=${this.name}, Id=${this.id}, salary=${this.salary}`
    }
    return this
}
console.log(person.prototype.__proto__);
const anilPerson = new person(1, "anil", 1000)
const sunilPerson = new person(2, "sunil", 2000)
anilPerson.print = function () {
    console.log('print');
}
console.log(anilPerson.__proto__);
console.log(anilPerson.__proto__ === sunilPerson.__proto__);
// person.prototype.print = function () {
//     console.log('print');
// }
// Object.prototype.print = function () {
//     console.log('print');
// }
//anilPerson.print();
console.log(Object.prototype);