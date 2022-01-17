const assertArraysEqual = require("../assertArraysEqual");

// => should all PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);

// => should all FAIL
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([1, 2, "3"], [1, 2, 3]);
