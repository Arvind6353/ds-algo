function rangeSum(arr) {
  // Code goes here

  let a = arr[0];
  let b = arr[1];

  // let s = 0;
  // for(let i=a;i<=b;i++) {
  // s+=i;
  // }
  // return s;

  //return (b-a+1)*(b+a)/2

  if (a >= b) return a;
  return a + rangeSum([a + 1, b]);
}

console.time("START");
console.log(rangeSum([1, 3]));
console.timeEnd("START");

module.exports = rangeSum;
