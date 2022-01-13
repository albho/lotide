const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😁👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;
};

// Returns true if both objects have identical keys with identical values.
const eqObjects = function (object1, object2) {
  const allKeys1 = Object.keys(object1);
  const allKeys2 = Object.keys(object2);

  // immediately return false if the two objects have a different number of keys
  if (allKeys1.length !== allKeys2.length) return false;

  // for every key of the first object
  for (const key of allKeys1) {
    let keyValue1 = object1[key];
    let keyValue2 = object2[key];
    // if two arrays are being compared
    if (Array.isArray(keyValue1) && Array.isArray(keyValue2)) {
      // compare them using a helper callback function
      return eqArrays(keyValue1, keyValue2);
      // otherwise, just compare the primitive value
    } else if (keyValue1 !== keyValue2) {
      return false;
    }
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
