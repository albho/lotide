const assert = require("chai").assert;
const countLetters = require("../countLetters");

describe("#countLetters", () => {
  it("returns 1 for [1, 2, 3]", () => {
    const actual = countLetters("lighthouse in the house").l;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it("returns 1 for [1, 2, 3]", () => {
    const actual = countLetters("lighthouse in the house").i;
    const expected = 2;
    assert.strictEqual(actual, expected);
  });

  it("returns '5' for ['5']", () => {
    const actual = countLetters("lighthouse in the house").h;
    const expected = 4;
    assert.strictEqual(actual, expected);
  });
});
