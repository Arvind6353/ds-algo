function findLength(str) {

// distinct = [a,b,c,d];
let distinctElem = findDistinct(str);
console.log(distinctElem);

let minLength = str.length;

for(let j=0 ; j < str.length ;j++) {

    let lengthSoFar = 0;
    let visitedElem = [];
    

    for(let i = j ; i < str.length; i++) {
        if(distinctElem.includes(str[i])) {
                lengthSoFar++;
                visitedElem[str[i]] = true;
            }

            if(Object.keys(visitedElem).length === distinctElem.length) {
                if(lengthSoFar < minLength) {
                    minLength = lengthSoFar;
                }
                break;
            }
    }
       
        
    }
    console.log("Min Length ", minLength);
};
    

function findDistinct(str) {
    return [...str].filter((f,i) => str.indexOf(f) === i);
}

findLength("abbbcbacbbcdbbaccc");

