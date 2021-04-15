var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;

console.log(findMissingNumber(arrayOfIntegers, upperBound, lowerBound)); // 8

function findMissingNumber(arr, upper, lower) {
  let sumCurrentSet = arr.reduce((a, v) => a + v, 0);

  let sumOfN = ((upper - lower + 1) * (upper + lower)) / 2;

  let diff = sumOfN - sumCurrentSet;

  return diff;
}
