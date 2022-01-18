const assert = require("chai").assert;
const map = require("../map");

const words = ["ground", "control", "to", "major", "tom"];

describe("#map", () => {
  it("returns ['g', 'c', 't', 'm', 't'] for ['ground', 'control', 'to', 'major', 'tom'], word => word[0]", () => {
    const actual = map(words, word => word[0]);
    const expected = ["g", "c", "t", "m", "t"];
    assert.deepEqual(actual, expected);
  });

  it("returns [6, 7, 2, 5, 3] for ['ground', 'control', 'to', 'major', 'tom'], word => word.length", () => {
    const actual = map(words, word => word.length);
    const expected = [6, 7, 2, 5, 3];
    assert.deepEqual(actual, expected);
  });

  it("returns ['Ground', 'Control', 'To', 'Major', 'Tom'] for ['ground', 'control', 'to', 'major', 'tom'],  word => word.charAt(0).toUpperCase() + word.slice(1)", () => {
    const actual = map(
      words,
      word => word.charAt(0).toUpperCase() + word.slice(1)
    );
    const expected = ["Ground", "Control", "To", "Major", "Tom"];
    assert.deepEqual(actual, expected);
  });
});
