const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😁👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
const eqObjects = function (object1, object2) {
  const allKeys1 = Object.keys(object1);
  const allKeys2 = Object.keys(object2);

  if (allKeys1.length !== allKeys2.length) return false;

  for (const key of allKeys1) {
    // if two arrays are being compared, iterate through and compare each value
    if (
      Array.isArray(object1[key]) &&
      Array.isArray(object2[key]) &&
      object1[key].length === object2[key].length
    ) {
      for (let i = 0; i < object1[key].length; i++) {
        if (object1[key][i] !== object2[key][i]) return false;
      }
      // otherwise, just compare the primitive value
    } else if (object1[key] !== object2[key]) return false;
  }
  return true;
};

// Assertions for primitive values
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// Assertions for array values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
