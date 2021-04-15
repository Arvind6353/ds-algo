/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {
    let op = [];
    arrays.forEach(a => {
        op = [...op, ...a];
    });

    // return [...new Set(op)];

    //return op.filter((a,i) => op.indexOf(a) == i);

    return op.reduce((unique, a) => unique.includes(a) ? unique : [...unique, a], []);


}


module.exports = mergeArrays