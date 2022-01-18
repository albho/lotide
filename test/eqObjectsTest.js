const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it("returns true for { a: '1', b: '2' }, { b: '2', a: '1' }", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const actual = eqObjects(ab, ba);
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it("returns false for { a: '1', b: '2' }, { b: '2', a: '1', c: '3' }", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    const actual = eqObjects(ab, abc);
    const expected = false;
    assert.strictEqual(actual, expected);
  });

  it("returns true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    const azb = { a: { z: 1 }, b: 2 };
    const azb2 = { a: { z: 1 }, b: 2 };
    const actual = eqObjects(azb, azb2);
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it("returns true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    const azb = { a: { z: 1 }, b: 2 };
    const azb2 = { a: { z: 1 }, b: 2 };
    const actual = eqObjects(azb, azb2);
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it("returns true for { c: '1', d: ['2', 3, 4] }, { c: '1', d: ['2', 3, 4] }", () => {
    const cd = { c: "1", d: ["2", 3, 4] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const actual = eqObjects(cd, cd2);
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it("returns false for { c: '1', d: [2, 3, 4] }, { c: '1', d: ['2', 3, 4] }", () => {
    const cd = { c: "1", d: [2, 3, 4] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const actual = eqObjects(cd, cd2);
    const expected = false;
    assert.strictEqual(actual, expected);
  });
});
