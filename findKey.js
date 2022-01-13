const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`😁👍 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`😓👎 Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = function (object, callback) {
  for (const key in object) {
    if (callback(object[key])) return key;
  }
};

const result1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

const result2 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 5
); // => undefined

const result3 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars < 2
); // => "Blue Hill"

assertEqual(result1, "noma");
assertEqual(result2, undefined);
assertEqual(result3, "Blue Hill");
