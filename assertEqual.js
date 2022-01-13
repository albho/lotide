const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`😁👍 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`😓👎 Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual("Bootcamp", "Bootcamp");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
