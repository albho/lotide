const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    const actual = eqArrays([1, 2, 3], [1, 2, 3]);
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it("returns false for [1, 2, 3], [3, 2, 1]", () => {
    const actual = eqArrays([1, 2, 3], [3, 2, 1]);
    const expected = false;
    assert.strictEqual(actual, expected);
  });

  it("returns true for [[2, 3], [4]], [[2, 3], [4]]", () => {
    const actual = eqArrays([[2, 3], [4]], [[2, 3], [4]]);
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it("returns true for ['1', '2', '3'], ['1', '2', '3']", () => {
    const actual = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it("returns false for ['1', '2', '3'], ['1', '2', 3]", () => {
    const actual = eqArrays(["1", "2", "3"], ["1", "2", 3]);
    const expected = false;
    assert.strictEqual(actual, expected);
  });

  it("returns false for [[2, 3], [4]], [[2, 3], [5]]", () => {
    const actual = eqArrays([[2, 3], [4]], [[2, 3], [5]]);
    const expected = false;
    assert.strictEqual(actual, expected);
  });
});
