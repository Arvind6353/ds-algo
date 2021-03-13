// Multi Pointer pattern - Sorted Arr

// Given a sorted Array, find the count of unique values
function countUniqueValues(arr) {
  if (!arr || arr.length === 0) return 0;
  let i = 0,
    count = 0;

  while (i < arr.length - 1) {
    if (arr[i] != arr[i + 1]) count++;
    i++;
  }
  // consider 1st element to be unique and then compare other values in the arr
  return count + 1;
}

let arr = [0, 1, 1, 2, 2];

let count = countUniqueValues(arr);

console.log(count); //3
