const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;
};

const assertArraysEqual = function (array1, array2) {
  eqArrays(array1, array2)
    ? console.log(`😁👍 Assertion Passed: [${array1}] === [${array2}]`)
    : console.log(`😓👎 Assertion Failed: [${array1}] !== [${array2}]`);
};

const obj = {
  key: "value",
  key2: "value2",
};

console.log(obj.key2);

const takeUntil = function (array, callback) {
  // console.log(array);
  const result = []; // [1, 2 ... 2]

  for (let item of array) {
    if (callback(item)) return result;
    result.push(item);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);

// console.log("---");

// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",",
//   "I've",
//   "been",
//   "to",
//   "Redwood",
// ];
// const results2 = takeUntil(data2, x => x === ",");
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);