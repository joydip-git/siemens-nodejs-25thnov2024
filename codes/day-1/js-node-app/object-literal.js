//1. object-literal syntax
var obj = {
    id: 1,
    name: 'joydip',
    salary: 1000,
    show: function () {
        return `Name=${this.name}, Id=${this.id}, salary=${this.salary}`
    }
}

//dot operator
console.log(obj.name);
console.log(obj.show());

//indexer
console.log(obj['salary']);
console.log(obj['show']());

obj.location = 'bangalore'
//obj['location']=''
//obj.sayHi = function () { }
obj['sayHi'] = function () {
    console.log(`hi ${this.name}`);
}

console.log(obj);
obj.sayHi();

for (let propName in obj) {
    let propValue = obj[propName]
    console.log(propName + ":" + propValue);
}
