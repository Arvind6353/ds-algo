/* CHALLENGE
Given a string of text, write an algorithm that returns the word with the longest length. 
E.g longestWord('Top Shelf Web Development Training on Scotch')  // should return 'Development'
*/



function longestWord(text) {
    // Code goes here

    if(!text) return "";

    // let maxString = text.split(" ").reduce((a,w) => w.length > a.length ? w : a ,"")
    // return maxString;

    // let sortArray = text.split(" ").sort((a,b) => b.length - a.length); 
    // return sortArray[0];

    let maxLength = 0;
    let maxWord = "";
    for(let word of text.split(" ")) {
        if(maxLength < word.length) {
            maxWord = word;
            maxLength = word.length;
        }
    }
    return maxWord;
    

}


module.exports = longestWord