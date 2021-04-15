var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

console.log(computeProduct(unsortedArray)); // 21000

function computeProduct(arr) {
  // product of 3 integers is = (max1*max2*max3) || (min1*min2*max3)

  let sArr = arr.sort((a, b) => a - b);
  let len = sArr.length;
  let p1 = 1,
    p2 = 1;

  p1 = sArr[0] * sArr[1] * sArr[len - 1];

  for (let i = len - 1; i > len - 4; i--) {
    p2 = p2 * sArr[i];
  }

  if (p1 > p2) return p1;
  else return p2;
}
