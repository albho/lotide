const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    const actual = tail([1, 2, 3, 4, 5]);
    const expected = [2, 3, 4, 5];
    assert.deepEqual(actual, expected);
  });

  it("returns 1 for [1, 2, 3]", () => {
    const actual = tail(["Hello", "Lighthouse", "Labs"]);
    const expected = ["Lighthouse", "Labs"];
    assert.deepEqual(actual, expected);
  });

  it("returns [] for ['5']", () => {
    const actual = tail(["5"]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
});
