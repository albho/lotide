const words = ["ground", "control", "to", "major", "tom"];

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;
};

const assertArraysEqual = function (array1, array2) {
  eqArrays(array1, array2)
    ? console.log(`😁👍 Assertion Passed: [${array1}] === [${array2}]`)
    : console.log(`😓👎 Assertion Failed: [${array1}] !== [${array2}]`);
};

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const firstChar = map(words, (word) => word[0]);
assertArraysEqual(firstChar, ["g", "c", "t", "m", "t"]);

const wordLength = map(words, (word) => word.length);
assertArraysEqual(wordLength, [6, 7, 2, 5, 3]);

const capitalized = map(
  words,
  (word) => word.charAt(0).toUpperCase() + word.slice(1)
);
assertArraysEqual(capitalized, ["Ground", "Control", "To", "Major", "Tom"]);
