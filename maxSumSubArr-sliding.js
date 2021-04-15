let arr = [1, 0, -1, 4, 7, -2, 5, 9, -2, 8, 5];

function maxSumSubArr(arr, count) {
  if (!arr || arr.length == 0 || arr.length < count) return 0;

  let maxSum = -Infinity;
  let tempSum = 0;

  for (let i = 0; i < count; i++) tempSum += arr[i];

  maxSum = Math.max(tempSum, maxSum);

  for (let i = count; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - count];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSumSubArr(arr, 3));
