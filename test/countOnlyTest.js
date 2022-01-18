const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  it("returns 1 for 'Jason'", () => {
    const firstNames = ["Fang", "Kavith", "Jason", "Fang"];
    const people = {
      Jason: true,
      Karima: true,
      Fang: true,
    };
    const actual = countOnly(firstNames, people).Jason;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it("returns 2 for 'Fang'", () => {
    const firstNames = ["Fang", "Kavith", "Jason", "Fang"];
    const people = {
      Jason: true,
      Karima: true,
      Fang: true,
    };
    const actual = countOnly(firstNames, people).Fang;
    const expected = 2;
    assert.strictEqual(actual, expected);
  });

  it("returns 4 for '3'", () => {
    const numbers = [1, 2, 3, 4, 3, 5, 3, 3];
    const numbersToCount = {
      1: true,
      2: true,
      3: true,
    };
    const actual = countOnly(numbers, numbersToCount)["3"];
    const expected = 4;
    assert.strictEqual(actual, expected);
  });

  it("returns undefined for '5'", () => {
    const numbers = [1, 2, 3];
    const numbersToCount = {
      1: true,
      2: true,
      3: true,
    };
    const actual = countOnly(numbers, numbersToCount)["5"];
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
});
