const countLetters = function (sentence) {
  const finalCount = {};

  for (let letter of sentence) {
    if (letter !== " ") {
      letter in finalCount ? finalCount[letter]++ : (finalCount[letter] = 1);
    }
  }

  return finalCount;
};

module.exports = countLetters;
