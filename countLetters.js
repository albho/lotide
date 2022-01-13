const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`😁👍 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`😓👎 Assertion Failed: ${actual} !== ${expected}`);
};

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

assertEqual(countLetters("lighthouse in the house").l, 1);
assertEqual(countLetters("lighthouse in the house").i, 2);
assertEqual(countLetters("lighthouse in the house").g, 1);
assertEqual(countLetters("lighthouse in the house").h, 4);
assertEqual(countLetters("lighthouse in the house").t, 2);
