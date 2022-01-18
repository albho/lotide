const assert = require("chai").assert;
const without = require("../without");

describe("#without", () => {
  it("returns [2, 3] for [1, 2, 3], [1]", () => {
    const actual = without([1, 2, 3], [1]);
    const expected = [2, 3];
    assert.deepEqual(actual, expected);
  });

  it("returns ['1', '2'] for ['1', '2', '3'], [1, 2, '3']", () => {
    const actual = without(["1", "2", "3"], [1, 2, "3"]);
    const expected = ["1", "2"];
    assert.deepEqual(actual, expected);
  });

  it("returns [] for [1, 2, 3], [3, 2, 1]", () => {
    const actual = without([1, 2, 3], [3, 2, 1]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
});
