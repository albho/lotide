const assertArraysEqual = require("../assertArraysEqual");
const tail = require("../tail");

// => should all PASS
assertArraysEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), [
  "Lighthouse",
  "Labs",
]);
