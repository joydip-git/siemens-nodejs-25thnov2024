//data types:
var x = 100
var y = 'joydip'

var isManager = true
var intVar = 12
var floatVar = 12.34

console.log(x, typeof x);
console.log(y, typeof y);
console.log(isManager, typeof isManager);
console.log(intVar, typeof intVar);
console.log(floatVar, typeof floatVar);

var m
console.log(m, typeof m);

var res = x + m
console.log(res, typeof res);

var nameRes = y + m
console.log(nameRes, typeof nameRes);

if (m)
    console.log(m);
else
    console.log('no value');

if (x / 0 == Infinity)
    throw new Error('divisor is zero')

