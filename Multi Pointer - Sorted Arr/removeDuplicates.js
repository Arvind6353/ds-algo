// Multi pointer pattern - Sorted Arr

// Given a sorted Arr, remove duplicates from the array in place

function removeDuplicates(arr) {
  if (!arr || arr.length === 0) return [];

  // move the non duplicate values to the front of the array

  // consider 1st element to be unique and start comparing other values in the array

  let idx = 0,
    i = 0;

  while (i < arr.length - 1) {
    if (arr[i] != arr[i + 1]) {
      arr[++idx] = arr[i + 1];
    }
    i++;
  }
  return arr.slice(0, idx + 1);
}

let arr = [0, 1, 1, 2, 3];

console.log(removeDuplicates(arr)); // [0,1,2,3]
