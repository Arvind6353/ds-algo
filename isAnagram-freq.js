let str1 = "abc";
let str2 = "bac";

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  let cMap1 = {},
    cMap2 = {};

  for (let c of str1) cMap1[c] = (cMap1[c] || 0) + 1;

  //for (let c of str2) cMap2[c] = (cMap2[c] || 0) + 1;

  //   for (let k in cMap1) {
  //     if (!(k in cMap2)) return false;
  //     if (cMap1[k] != cMap2[k]) return false;
  //   }

  for (let c of str2) {
    if (!cMap1[c]) return false;
    cMap1[c]--;
  }

  return true;
}

console.log(isAnagram(str1, str2));
