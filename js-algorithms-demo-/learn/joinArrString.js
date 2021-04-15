let arr = ["s", "cr", "tcod", ""];
let str = "e";

function joinArrayString(arr, str) {
  let result = "";

  for (let i = 0; i < arr.length - 1; i++) {
    result += arr[i] + str;
  }
  return result + arr[arr.length - 1];
}

console.log(joinArrayString(arr, str));

function joinArrayStringRecursive(arr, str) {
  function recur(index, output) {
    output += arr[index];
    if (index === arr.length - 1) return output;
    else return recur(index + 1, output + str);
  }

  return recur(0, "");
}

console.log(joinArrayStringRecursive(arr, str));

let val = arr.reduce((output, item, index) => {
  if (index === arr.length - 1) return output + item;
  else return output + item + str;
}, "");

console.log(val);
