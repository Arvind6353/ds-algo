let arr = [1, 1, 2, 2, 3, 4, 5, 6, 6, 7];

function countUniqueVal(arr) {
  //return [...new Set(arr)].length;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return arr.slice(0, i + 1);
}

console.log(countUniqueVal(arr));
