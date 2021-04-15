/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    // Code goes here

    let countVowel = 0;
    if(!text) return 0;

    // [...text.toLowerCase()].forEach(c => {
    //     if(c == "a" || c == "e" || c == "i" || c=="o" || c=="u") {
    //         countVowel +=1;
    //     }
    // });

    // let vowels = ["a","e","i","o","u"];
    // for(let c of text.toLowerCase()) {
    //     if(vowels.includes(c)) countVowel++;
    // };

    let reg = new RegExp(/[aeiou]/gi);
    let matches = text.match(reg);
    countVowel = matches.length;


    return countVowel;
}



module.exports = vowelsCounter;
