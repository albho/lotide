const assert = require("chai").assert;
const findKey = require("../findKey");

describe("#findKey", () => {
  it("returns 'noma' for  x => x.stars === 2", () => {
    const actual = findKey(
      {
        "Blue Hill": { stars: 1 },
        Akaleri: { stars: 3 },
        noma: { stars: 2 },
        elBulli: { stars: 3 },
        Ora: { stars: 2 },
        Akelarre: { stars: 3 },
      },
      x => x.stars === 2
    );
    const expected = "noma";
    assert.strictEqual(actual, expected);
  });

  it("returns undefined for x => x.stars === 5", () => {
    const actual = findKey(
      {
        "Blue Hill": { stars: 1 },
        Akaleri: { stars: 3 },
        noma: { stars: 2 },
        elBulli: { stars: 3 },
        Ora: { stars: 2 },
        Akelarre: { stars: 3 },
      },
      x => x.stars === 5
    );
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
});
