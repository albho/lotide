const assertArraysEqual = require("../assertArraysEqual");
const letterPositions = require("../letterPositions");

// => should all PASS
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello world!").l, [2, 3, 9]);
