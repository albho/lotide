const eqArrays = require("./eqArrays");

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

    // if object, compare objects again via recursion
    if (
      typeof keyValue1 === "object" &&
      !Array.isArray(keyValue1) &&
      typeof keyValue2 === "object" &&
      !Array.isArray(keyValue2)
    ) {
      return eqObjects(keyValue1, keyValue2);
    }

    // if two arrays are being compared
    if (Array.isArray(keyValue1) && Array.isArray(keyValue2)) {
      // compare them using a helper callback function
      return eqArrays(keyValue1, keyValue2);
    }
    
    // otherwise, just compare the primitive value
    if (keyValue1 !== keyValue2) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
