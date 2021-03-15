// Multi Pointer

// given an array with -1 and values , sort the array in ascending order and keep -1 in their same position

function sortByHeight(arr) {
  let sortedArrNot1s = arr.filter((a) => a !== -1).sort((a, b) => a - b);

  let indx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != -1) arr[i] = sortedArrNot1s[indx++];
  }
  return arr;
}

console.log(sortByHeight([-1, 100, -1, -1, 80, 120, -1, 20, -1, 2]));
