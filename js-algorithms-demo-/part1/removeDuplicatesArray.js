var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

console.log(removeDuplicates(array));
// [1,2,3,5,9,8]
function removeDuplicates(arr) {

    //return [...new Set(arr)];

    //return [...new Set([...arr])];

    //return Array.from(new Set(arr));
    
    //return Array.from(new Set([...arr]));


    // let dupMap = {};
    // let opArray = [];
    // for(let v of arr) {
    //     if(!dupMap[v]) {
    //         dupMap[v] = true;
    //         opArray.push(v);
    //     }
    // }

    // return opArray;

    //return arr.filter((a,i) => arr.indexOf(a) == i)

     return arr.reduce((arr,v) => arr.includes(v) ? arr : [...arr,v], []);

}