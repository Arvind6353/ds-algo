let arr = [1,2,2,3,3,4,4,5,5];

for(let i = 0; i <= arr.length - 1; i++) {

    if(!arr[i+1] || arr[i+1] !== arr[i] ) {
        console.log("elem ", arr[i]);
        return;
    } else {
        i++;
    }
}
