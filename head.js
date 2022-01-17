const head = function (array) {
  if (array.length === 0 || typeof array !== "object") return undefined;
  return array[0];
};

module.exports = head;
