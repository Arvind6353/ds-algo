// Multi pointer pattern - Sorted Arr

// In a given sorted array, Find the 1st pair where the sum is 0. Return undefined if the pair does not exist
function sumZeroPair(arr) {
  if (!arr || arr.length == 0) return undefined;

  let left = 0,
    right = arr.length - 1;
  // traverse in both directions and find the sum and based on the sum traverse left or right in each step
  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum == 0) return [left, right];
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
}

let arr = [-4, -3, 0, 1, 2, 3];
console.log(sumZeroPair(arr)); // 1,5
