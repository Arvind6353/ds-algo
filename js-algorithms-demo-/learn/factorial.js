function factorialBasic(n) {
  let res = 1;

  for (let i = 1; i <= n; i++) {
    res = res * i;
  }
  return res;
}
console.log(factorialBasic(5));

/***************************************** */

function factorialRecursion(n) {
  if (n <= 1) return 1;
  else return factorialRecursion(n - 1) * n;
}
console.log(factorialRecursion(5));

/******************************************** */

// with Closures

function factorialMemoize() {
  let memo = {};

  return function fact(n) {
    if (n <= 1) return 1;

    if (n in memo) {
      console.log(" from cache ");
      return memo[n];
    } else {
      memo[n] = n * fact(n - 1);
      return memo[n];
    }
  };
}
const fact = factorialMemoize();
console.log(fact(5));
console.log(fact(6));
