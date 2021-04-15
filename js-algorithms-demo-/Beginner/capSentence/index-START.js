/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
   // Code goes here
   if(!text) return "";

   return text.split(" ").map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(" ");
}



module.exports = capSentence