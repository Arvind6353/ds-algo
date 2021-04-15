exports.uniqSort = uniqSort
function uniqSort(arr) {

    let cache = {};
    let result = [];
    for(let i =0; i< arr.length;i++) {

        if(!cache[arr[i]]) {
            result.push(arr[i]);
        }
        cache[arr[i]] = true;
    }

    return result.sort((a,b) => a-b);

}

let arr = [1,5,4,1,2];

console.log(uniqSort(arr));