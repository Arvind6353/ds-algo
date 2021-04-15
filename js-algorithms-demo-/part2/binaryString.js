console.log(decimalToBinary(8)); // 11
function decimalToBinary(digit) {
  let op = "";

  while (digit >= 1) {
    let n = digit % 2;
    op = n.toString() + op;
    digit = parseInt(digit / 2);
  }
  return op;
}
