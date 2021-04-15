/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    // Code goes here
    if(!text) return false;

    return text.toLowerCase().split("").reverse().join("") === text.toLowerCase()


    // let result = [...text.toLowerCase()].every((ch, i) => {
    //     return ch === text[text.length - i -1];
    // })
    // return result

    // let t = text.length;
    // for(let i = 0; i< t / 2 ; i++) {
    //     if(text[i] != text[t - i -1]) return false;
    // }
    // return true;


}



module.exports = palindromeChecker;