/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

function falsyBouncer(array) {
  // Code goes here

  //   return array.filter(a => Boolean(a));
  let result = [];
  for (let a of array) {
    if (a) result.push(a);
  }
  return result;
}

module.exports = falsyBouncer;
