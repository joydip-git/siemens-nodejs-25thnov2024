define(["./utility"], function (_utility) {
  "use strict";

  // console.log(add(12, 13))
  // console.log(subtract(12, 3));

  //const utilityExports = require('./utility')
  //console.log(utilityExports);
  //console.log(module);

  //const { addFn, subFn } = require('./utility')
  // console.log(addFn(12, 13));
  // console.log(subFn(12, 3));

  console.log((0, _utility.add)(12, 13));
  console.log((0, _utility.subtract)(12, 3));
});