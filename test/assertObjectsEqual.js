const assertObjectsEqual = require("../assertObjectsEqual");

// => should PASS
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);
