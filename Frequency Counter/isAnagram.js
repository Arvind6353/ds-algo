// Frequency Counter pattern

// check if the given 2 strings are Anagram
function isAnagram(str1, str2) {
  // check for length

  if (!str1 || !str2) return false;
  if (str1.length != str2.length) return false;

  let freqCount = new Map();

  // set the freq count for each char in string 1
  for (let char of str1) {
    freqCount.set(char, (freqCount.get(char) || 0) + 1);
  }

  // check the string 2 against the freq counter
  for (let char of str2) {
    // if the char doesnt exist in string 1 or if string 2 contains more occurrence of the char - return false
    if (!freqCount.has(char)) return false;
    let count = freqCount.get(char);

    // decrement frequency counter of the string 1
    freqCount.set(char, count--);
  }

  return true;
}

let str1 = "qwerty";
let str2 = "wqreyt";
console.log(isAnagram(str1, str2)); //true
