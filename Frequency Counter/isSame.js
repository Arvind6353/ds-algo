// Frequency counter

// Given 2 arrays, return true if every value in an array has corresponding value squared in the second array.
// The frequency of values must be the same

function isSame(arr1, arr2) {
  if (!arr1 || !arr2) return false;
  if (arr1.length != arr2.length) return false;

  let freq1 = {};
  // create a map with the square of the values from the array 1
  for (let c of arr1) {
    freq1[c ** 2] = (freq1[c ** 2] || 0) + 1;
  }

  for (let c of arr2) {
    if (!freq1[c]) return false;
    freq1[c]--;
  }
  return true;
}

console.log(isSame([1, 2, 3], [4, 9, 1])); // true
console.log(isSame([1, 1, 2], [1, 2, 4])); // false
