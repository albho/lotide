const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`😁👍 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`😓👎 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function (array) {
  if (typeof array !== "object") return undefined;
  if (array.length <= 1) return [];
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3);
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
