/* CHALLENGE
Given an integer, return an integer that is the reverse 
ordering of that which was received. E.g
    reverseInteger(-123) // should return -321
*/

function reverseInteger(num) {
    let str = num.toString();
    let rvstr = [...str].reduce((a,c) => c+a,"");
    return parseInt(rvstr)* Math.sign(num)
}



module.exports = reverseInteger;
