const takeUntil = function (array, callback) {
  const result = [];

  for (let item of array) {
    if (callback(item)) return result;
    result.push(item);
  }
};

module.exports = takeUntil;
