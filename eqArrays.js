const eqArrays = function (actual, expected) {
  if (actual === expected) return true;
  if (actual.length !== expected.length) return false;
  if (!Array.isArray(actual) || !Array.isArray(expected)) return false;

  for (let i = 0; i < actual.length; i++) {
    if (!eqArrays(actual[i], expected[i])) return false;
  }

  return true;
};

module.exports = eqArrays;
