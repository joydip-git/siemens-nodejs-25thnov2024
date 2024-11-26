//const { add} = require('./utility')
//console.log(add(12, 3));
//console.log(module.children);

// import x from './utility'
// import { subtract } from "./utility";
//import EventEmitter from 'node:events'
// console.log(subtract(12, 3));
// console.log(x(12, 3));

import Utility from './utility'
const utility = new Utility()
console.log(utility.add(12, 13))