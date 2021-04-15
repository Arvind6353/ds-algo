let arr = [1,2,3,5];
function missingNumber(arr) {


    let len = arr.length;

    let arrSum = 0;
    let sum = (len+1)*(len+2)/2;

    for(let i =0;i<arr.length;i++) arrSum +=arr[i];

    return sum - arrSum;

}

console.log(missingNumber(arr));