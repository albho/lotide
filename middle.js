const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    return console.log(`😁👍 Assertion Passed: [${array1}] === [${array2}]`);
  }
  return console.log(`😓👎 Assertion Failed: [${array1}] !== [${array2}]`);
};

const middle = function (array) {
  const arrayLength = array.length;
  if (arrayLength <= 2) {
    return [];
  }

  if (arrayLength % 2 === 0) {
    const middleIndex1 = arrayLength / 2 - 1;
    const middleIndex2 = middleIndex1 + 1;
    return [array[middleIndex1], array[middleIndex2]];
  } else {
    const middleIndex = Math.floor(arrayLength / 2);
    return [array[middleIndex]];
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
