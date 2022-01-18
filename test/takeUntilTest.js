const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const actual = takeUntil(data1, x => x < 0);
    const expected = [1, 2, 5, 7, 2];
    assert.deepEqual(actual, expected);
  });

  it("returns ['I've', 'been', 'to', 'Hollywood'] for ['I've', 'been', 'to', 'Hollywood', 'I've', 'been', 'to', 'Redwood'], x => x === ','", () => {
    const data2 = [
      "I've",
      "been",
      "to",
      "Hollywood",
      ",",
      "I've",
      "been",
      "to",
      "Redwood",
    ];
    const actual = takeUntil(data2, x => x === ",");
    const expected = ["I've", "been", "to", "Hollywood"];
    assert.deepEqual(actual, expected);
  });
});
