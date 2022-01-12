const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😁👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, value) {
  // via .find()
  // return Object.keys(object).find((key) => object[key] === value);

  // via iteration
  const allKeys = Object.keys(object);
  for (let key of allKeys) {
    if (object[key] === value) return key;
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
