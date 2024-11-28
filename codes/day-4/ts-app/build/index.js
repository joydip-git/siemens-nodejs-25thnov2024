"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var x = 10; //TS uses type inference to understand the type of x from the assigned value
//let x:number = 10
var add = function (a, b) {
    return a + b;
};
var addRes = add(12, 3);
console.log(addRes);
var Person = /** @class */ (function () {
    /*
    id: number;
    name: string;
    salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }*/
    function Person(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Person.prototype.show = function () {
        return "".concat(this.name, ", ").concat(this.id, ", ").concat(this.salary);
    };
    return Person;
}());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(id, name, salary, subject) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.subject = subject;
        return _this;
        //this.location = 'bangalore'
        //Trainer.location = 'bangalore'
    }
    Trainer.getLocation = function () {
        return this.location;
    };
    Trainer.prototype.show = function () {
        return "".concat(_super.prototype.show.call(this), ", ").concat(this.subject, ",").concat(Trainer.location);
    };
    Trainer.location = 'Bangalore';
    return Trainer;
}(Person));
var joydipTrainer = new Trainer(1, 'joydip', 1000, 'JS');
console.log(joydipTrainer.show());
var Operations = /** @class */ (function () {
    function Operations() {
    }
    Operations.prototype.print = function () {
        return "print method";
    };
    return Operations;
}());
var Impl = /** @class */ (function (_super) {
    __extends(Impl, _super);
    function Impl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Impl.prototype.show = function () {
        return "show";
    };
    return Impl;
}(Operations));
var employees = [
    {
        id: 1,
        department: 'EU',
        salary: 1000,
        isManager: true,
        currentProject: undefined
    }
];
var cTypeObj = {
    //hello: () => { }
    hello: function () {
    },
    hi: function () {
    },
    method: function () {
    },
};
var subtract = function (a, b) {
    return a - b;
};
var call = function (fnRef, a, b) {
    return fnRef(a, b);
};
console.log(call(subtract, 12, 13));
