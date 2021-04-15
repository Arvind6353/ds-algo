function rangeSum(arr) {

    let a= arr[0];
    let b = arr[1];
    
    // let sum = 0;
    // for(let i=a;i<=b;i++){
    //     sum+=i;
    // }
    // return sum;

    
    //return (b-a+1)*(a+b)/2;
    
    
    if(a == b) return b;
    return a + rangeSum([a+1,b]);

}
console.time("START");
console.log(rangeSum([1,3]) )
console.timeEnd("START");