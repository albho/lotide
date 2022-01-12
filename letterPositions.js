const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    return console.log(`😁👍 Assertion Passed: [${array1}] === [${array2}]`);
  }
  return console.log(`😓👎 Assertion Failed: [${array1}] !== [${array2}]`);
};

const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (sentence[i] in results) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }

  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
