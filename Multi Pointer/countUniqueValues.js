// Multi Pointer pattern - Sorted Arr - In place

// In a given sorted array, find the count of unique values
// Remove duplicates in place

// In place removing duplication (moving non duplicate values to front part of the array)
function countUniquevalues(arr) {
  if (!arr || arr.length == 0) return 0;

  let len = arr.length,
    idx = 0,
    i = 0;
  // start the pointers from left most and move each step comparing with the next element
  while (i < len - 1) {
    if (arr[i] != arr[i + 1]) {
      // fill the front part of the array with non duplicate value
      arr[++idx] = arr[i + 1];
    }
    i++;
  }
  return idx + 1;
}

let arr = [0, 1, 1, 1, 2];
let count = countUniquevalues(arr);
console.log(count); //3
console.log(arr.slice(0, count)); //[0, 1, 2];
