/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

function isAnagram(stringA, stringB) {
  // Code goes here

  if (stringA.length != stringB.length) return false;

  let aArray = stringA.trim().toLowerCase().split("");
  let bArray = stringB.trim().toLowerCase().split("");

  let sortedA = aArray.sort((a,b) => a.localeCompare(b));
  let sortedB = bArray.sort((a,b) => a.localeCompare(b));

  return sortedA.join("") === sortedB.join("")

//   function getCharMap(string) {
//     let charMap = {};

//     for (let c of string) {
//       if (!charMap[c]) {
//         charMap[c] = 1;
//       } else {
//         charMap[c] += 1;
//       }
//     }
//     return charMap;
//   }

//   let aCharMap = getCharMap(stringA);
//   let bCharMap = getCharMap(stringB);

//   for(let a in aCharMap) {
//       if(aCharMap[a] != bCharMap[a]) return false;
//   }
//   return true;

}

module.exports = isAnagram;
