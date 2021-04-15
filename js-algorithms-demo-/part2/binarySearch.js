function recursiveBinarySearch(arr, val, left, right) {
  if (left > right) return -1;

  var mid = Math.floor((left + right) / 2);

  if (arr[mid] === val) {
    return mid;
  } else if (arr[mid] > val) {
    return recursiveBinarySearch(arr, val, left, mid - 1);
  } else {
    return recursiveBinarySearch(arr, val, mid + 1, right);
  }
}
