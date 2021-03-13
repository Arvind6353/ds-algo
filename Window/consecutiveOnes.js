//  Window

// Given a array, Find the max no of consecutive 1s in the array

// slide through the array finding the currentMax and updating Max when 1 is encountered
// reset currentMax when anything other than 1 is encountered in the array

function consecutive1s(arr) {
  if (!arr || arr.length == 0) return 0;

  let max = 0;
  let currentMax = 0;

  // slide through the array finding the currentMax and updating Max when 1 is encountered

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currentMax++;
      max = Math.max(max, currentMax);
    } else {
      // reset currentMax when anything other than 1 is encountered in the array
      currentMax = 0;
    }
  }

  return max;
}

console.log(consecutive1s([1, 1, 0, 1, 1, 1])); //3
