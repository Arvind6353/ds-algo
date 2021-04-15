/*
Translate the provided string to pig latin by following the rules below:
- For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g  
  - "pig" = "igpay"
- For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g  
  - "glove" = "oveglay"
-  For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
  - "explain" = "explainway”
*/

function pigLatin(str) {
    // Code goes here
    let vowelReg = /[aeiou]/gi;
    let consonantReg = new RegExp(/[^aeiou]/gi);

    if(vowelReg.test(str[0])) {
        return str+"way";
    } 

    console.log(str[0].match(consonantReg))

    let i = 0;
    while(str[i].match(consonantReg)) {
        console.log("hellow");
        i++;
    }
    
    let length = i;

    return str.slice(length) + str.slice(0,length) + "ay";

  }
  
  module.exports = pigLatin;