var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

console.log(intersection(firstArray, secondArray)); // [2, 1]


function intersection(arr1,arr2) {

  //  return [...new Set(arr1.filter(a1 => arr2.includes(a1)))];

  let uniqueMap = {};

  let intersectionArray = [];

  arr1.forEach(a => uniqueMap[a] = 1);

  arr2.forEach(b => {
      if(uniqueMap[b] == 1) {
          intersectionArray.push(b);
          uniqueMap[b]++;
      }
  });

  return intersectionArray



}