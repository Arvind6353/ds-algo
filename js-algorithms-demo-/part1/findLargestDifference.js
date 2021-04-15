var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];
console.log(findLargestDifference(array)) == 11;

function findLargestDifference(arr) {
  if (arr.length <= 1) return -1;

  let currentMin = arr[0];
  let currentMaxDiff = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currentMin) {
      if (arr[i] - currentMin > currentMaxDiff) {
        currentMaxDiff = arr[i] - currentMin;
      }
    } else {
      currentMin = arr[i];
    }
  }

  return currentMaxDiff;
}
