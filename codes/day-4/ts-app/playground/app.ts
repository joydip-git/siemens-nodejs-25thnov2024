import { getData } from "./dbutility";

let x = 10 //TS uses type inference to understand the type of x from the assigned value
//let x:number = 10

const add = (a: number, b: number): number => {
    return a + b
}

const addRes = add(12, 3)
console.log(addRes);

class Person {
    /*
    id: number;
    name: string;
    salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }*/
    constructor(public id: number, public name: string, public salary: number) {

    }
    show(): string {
        return `${this.name}, ${this.id}, ${this.salary}`
    }
}
class Trainer extends Person {
    static location: string = 'Bangalore';

    constructor(id: number, name: string, salary: number, public subject: string) {
        super(id, name, salary)
        //this.location = 'bangalore'
        //Trainer.location = 'bangalore'
    }
    static getLocation(): string {
        return this.location
    }
    show(): string {
        return `${super.show()}, ${this.subject},${Trainer.location}`
    }
}

const joydipTrainer = new Trainer(1, 'joydip', 1000, 'JS')
console.log(joydipTrainer.show());
//console.log(Trainer.getLocation());

interface IOperations {
    print(): string;
    show(): string;
}
abstract class Operations implements IOperations {
    print(): string {
        return "print method"
    }
    abstract show(): string;
}
class Impl extends Operations {
    show(): string {
        return "show";
    }
}

interface Employee {
    id: number;
    department: string;
    salary: number;
    isManager: boolean;
    currentProject?: string | undefined;
}

const employees: Employee[] = [
    {
        id: 1,
        department: 'EU',
        salary: 1000,
        isManager: true,
        currentProject: undefined
    }
]

type myType = number | string | boolean | undefined | null;
type EmployeeType = {
    id: number,
    department: string,
    salary: number,
    isManager: boolean,
    currentProject?: string | undefined
}

interface IA { }
interface IB { }
interface IC extends IB, IA { }

type AType = { hello(): void; }
type BType = { hi(): void; }
type CType = { method(): void; } & AType & BType

const cTypeObj: CType = {
    //hello: () => { }
    hello() {

    },
    hi() {

    },
    method() {

    },
}

const subtract = (a: number, b: number): number => {
    return a - b
}

type fnType<T, TResult> = (x: T, y: T) => TResult

const call = <T, TResult extends myType>(fnRef: fnType<T, TResult>, a: T, b: T): TResult => {
    return fnRef(a, b)
}

console.log(call(subtract, 12, 13))

interface IFunctionalities<T> {
    add(obj: T): boolean;
}
class Functionalities<T extends Employee> implements IFunctionalities<T> {
    add(obj: T): boolean {
        return true
    }
}

const obj = new Functionalities<Employee>()
console.log(obj.add({
    id: 1,
    department: 'EU',
    salary: 1000,
    isManager: true,
    currentProject: undefined
}));
console.log('running using nodemon');

(
    async () => {
        try {
            console.log(await getData());
        } catch (error) {
            console.log(error);
        }
    }
)()