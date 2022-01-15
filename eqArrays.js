const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`😁👍 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`😓👎 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function (actual, expected) {
  if (actual === expected) return true;
  if (actual.length !== expected.length) return false;
  if (!Array.isArray(actual) || !Array.isArray(actual)) return false;

  for (let i = 0; i < actual.length; i++) {
    if (!eqArrays(actual[i], expected[i])) return false;
  }

  return true;
};

// => should all PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(
  eqArrays(
    [[2, 3], [4]],

    [
      [2, 3],
      [4, 5],
    ]
  ),
  false
);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
