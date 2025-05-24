function map(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new TypeError("First argument must be an array");
  }
  if (typeof callback !== "function") {
    throw new TypeError("Second argument must be a function");
  }
  const output = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      output[i] = callback(arr[i], i, arr);
    }
  }
  return output;
}

console.log(
  map([1, 2, 3], function (value) {
    return value * 2;
  })
);
