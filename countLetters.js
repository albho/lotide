// Unsure about necessity of assertEqual
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`😁👍 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`😓👎 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const countLetters = function (sentence) {
  const finalCount = {};

  for (let letter of sentence) {
    if (letter !== " ") {
      if (letter in finalCount) {
        finalCount[letter]++;
      } else {
        finalCount[letter] = 1;
      }
    }
  }

  return finalCount;
};

console.log(countLetters("lighthouse in the house"));
