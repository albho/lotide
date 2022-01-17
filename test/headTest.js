const assert = require("chai").assert;
const head = require("../head");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    const actual = head([1, 2, 3]);
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it("returns 1 for [1, 2, 3]", () => {
    const actual = head(["Hello", "Lighthouse", "Labs"]);
    const expected = "Hello";
    assert.strictEqual(actual, expected);
  });

  it("returns '5' for ['5']", () => {
    const actual = head(["5"]);
    const expected = "5";
    assert.strictEqual(actual, expected);
  });
});
