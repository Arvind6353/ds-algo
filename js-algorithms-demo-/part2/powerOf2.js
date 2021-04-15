
console.log(isPowerOfTwo(4)); // true
console.log(isPowerOfTwo(5)); // false
function isPowerOfTwo(n) {

    if(n<1) return false;

    return (n & (n-1)) ===0;


}