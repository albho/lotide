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

module.exports = middle;
