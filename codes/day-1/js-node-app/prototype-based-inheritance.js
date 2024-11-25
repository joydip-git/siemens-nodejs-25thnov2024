function person(id, name, salary) {
    this.id = id
    this.name = name
    this.salary = salary
}
person.prototype.show = function () {
    return `Name=${this.name}, Id=${this.id}, salary=${this.salary}`
}
function trainer(id, name, salary, subjects) {
    person.call(this, id, name, salary)
    this.subjects = subjects
    this.show = function () {
        //var partialInfo = person.prototype.show.apply(this)
        var partialInfo = this.__proto__.show.apply(this)
        return `${partialInfo}, Subjects=${this.subjects}`
    }
}
Object.setPrototypeOf(trainer.prototype, person.prototype)
const joydipTrainer = new trainer(1, 'joydip', 1000, ['JS', 'C#'])
//joydipTrainer "proto" property gets connected to the base object (which is trainer function's prototype object)
console.log(joydipTrainer.show());
