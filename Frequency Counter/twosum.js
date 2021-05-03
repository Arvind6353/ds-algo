// Given an Unsorted Array and a sum, find if there is a pair that sums to the given sum and return the pair else return null

function twoSum(arr, sum) {
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (seen[sum - arr[i]] != undefined) {
      return [i, seen[sum - arr[i]]];
    }

    seen[arr[i]] = i;
  }
  return null;
}

console.log(twoSum([10, 15, 4, 2, 7, 10], 5)); // 0,2
