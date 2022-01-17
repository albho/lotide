const flatten = function (array) {
  const flattenedArray = [];

  for (let item of array) {
    if (Array.isArray(item)) {
      // spread elements of array returned by .flatten() and push
      flattenedArray.push(...flatten(item));
    } else {
      flattenedArray.push(item);
    }
  }

  return flattenedArray;
};

module.exports = flatten;
