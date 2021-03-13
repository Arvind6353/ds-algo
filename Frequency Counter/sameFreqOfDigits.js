// Frequency counter

// Given 2 positive integers, find if the two numbers have same frequency of digits

function isSameFrequency(num1, num2) {
  // convert the numbers in to string

  if (!num1 || !num2) return false;
  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length != num2.length) return false;

  let freq1 = {},
    freq2 = {};

  for (let c of num1) freq1[c] = (freq1[c] || 0) + 1;

  for (let c of num2) {
    if (!freq1[c]) return false;
    freq1[c]--;
  }
  return true;
}

console.log(isSameFrequency(123, 132)); // true
