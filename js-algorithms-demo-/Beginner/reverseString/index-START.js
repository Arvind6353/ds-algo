/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    // Code goes here
    if(!text) return;
    //return text.split("").reverse().join("");
    //return [...text].reverse().join("");

    // let reversedString = "";
    // for(let i = text.length -1 ; i>=0; i--) {
    //     reversedString+= text[i];
    // }
    // return reversedString;

    // if(text.length == 1) return text;
    // return reverseString(text.slice(1)) + text.slice(0,1);
    return [...text].reduce((a,c) => c + a ,"");
}



module.exports = reverseString