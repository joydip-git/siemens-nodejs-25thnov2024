class Person {
    #_id
    #_name
    #_salary
    constructor(id, name, salary) {
        this.#_id = id
        this.#_name = name
        this.#_salary = salary
    }
    get id() {
        return this.#_id
    }
    set id(value) {
        this.#_id = value
    }
    get name() {
        return this.#_name
    }
    set name(value) {
        this.#_name = value
    }
    get salary() {
        return this.#_salary
    }
    set salary(value) {
        this.#_salary = value
    }
    show() {
        return `Name=${this.#_name}, Id=${this.#_id}, salary=${this.#_salary}`
    }
}
class Trainer extends Person {
    #_subjects
    constructor(id, name, salary, subjects) {
        super(id, name, salary)
        this.#_subjects = subjects
    }
    get subjects() {
        return this.#_subjects
    }
    set subjects(value) {
        this.#_subjects = value
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
