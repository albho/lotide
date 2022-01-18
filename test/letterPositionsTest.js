const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("returns [1] for 'hello'.e", () => {
    const actual = letterPositions("hello").e;
    const expected = [1];
    assert.deepEqual(actual, expected);
  });

  it("returns [2, 3, 9] for 'hello world!'.l", () => {
    const actual = letterPositions("hello world!").l;
    const expected = [2, 3, 9];
    assert.deepEqual(actual, expected);
  });
});
