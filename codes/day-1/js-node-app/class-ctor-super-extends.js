class Person {
    constructor(id, name, salary) {
        this.id = id
        this.name = name
        this.salary = salary
    }
    show() {
        return `Name=${this.name}, Id=${this.id}, salary=${this.salary}`
    }
}
class Trainer extends Person {
    constructor(id, name, salary, subjects) {
        super(id, name, salary)
        this.subjects = subjects
    }
    show() {
        var partialInfo = super.show()
        return `${partialInfo}, Subjects=${this.subjects}`
    }
}

//Object.setPrototypeOf(trainer.prototype, person.prototype)
const joydipTrainer = new Trainer(1, 'joydip', 1000, ['JS', 'C#'])
//joydipTrainer "proto" property gets connected to the base object (which is trainer function's prototype object)
console.log(joydipTrainer.show());
// console.log(Person.prototype);
// console.log(Trainer.prototype);
// console.log(joydipTrainer.__proto__);
