const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");

// => should all PASS
const words = ["ground", "control", "to", "major", "tom"];
const firstChar = map(words, word => word[0]);
assertArraysEqual(firstChar, ["g", "c", "t", "m", "t"]);

const wordLength = map(words, word => word.length);
assertArraysEqual(wordLength, [6, 7, 2, 5, 3]);

const capitalized = map(
  words,
  word => word.charAt(0).toUpperCase() + word.slice(1)
);
assertArraysEqual(capitalized, ["Ground", "Control", "To", "Major", "Tom"]);
