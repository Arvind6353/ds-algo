let arr = [-4, -3, -2, -1, , 0, 1, 2, 5];

function sumPairZero(arr) {
  if (!arr || arr.length == 0) {
    return;
  }

  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumPairZero(arr));
