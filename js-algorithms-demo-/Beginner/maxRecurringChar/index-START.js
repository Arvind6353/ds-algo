/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    // Code goes here
    let charMap = {};
    let largest = 0;
    let mostRecur = "";

    if(!text) {
        return "";
    }

    for(let char of text) {
        if(!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char] = charMap[char] + 1;
        }
    }

   

    for(let key in charMap) {
        if(largest < charMap[key]) {
            largest = charMap[key];
            mostRecur = key;
        }
    }

    // let charArray = Object.keys(charMap);
    // let valuesArray = Object.values(charMap);
    // let maxVal = Math.max(...valuesArray);

    // mostRecur = charArray[valuesArray.indexOf(maxVal)];

    return mostRecur;
}



module.exports = maxRecurringChar;