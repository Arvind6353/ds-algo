let arr1 = [1, 2, 3];
let arr2 = [1, 4, 6];

function isSame(arr1, arr2) {
  let aCounter = {},
    bCounter = {};
  for (let a of arr1) {
    aCounter[a] = (aCounter[a] || 0) + 1;
  }
  for (let b of arr2) {
    bCounter[b] = (bCounter[b] || 0) + 1;
  }
  for (let key1 in aCounter) {
    if (!(key1 * 2 in bCounter)) return false;
    if (aCounter[key1] !== bCounter[key1 * 2]) return false;
  }
  return true;
  //   return arr1.every((a) => arr2.includes(a * 2));
}

console.log(isSame(arr1, arr2));
