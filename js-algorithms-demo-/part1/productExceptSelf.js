var firstArray = [2, 2, 4, 1];

console.log(productExceptSelf(firstArray)); // [8, 8, 4, 16]

function productExceptSelf(arr) {

    let l = [], r= [], p = [];
    let len = arr.length;
    l[0] = 1;
    r[len - 1] = 1;

    for(let i = 1;i< len ;i++) {
        l[i] = l[i-1] * arr[i-1];
    }

    console.log(l);

    for(let i = len-2;i>=0;i--) {
        r[i] = r[i+1] * arr[i+1];
    }
    console.log(r)

    for(let i =0;i<len;i++) {
        p[i] = l[i]* r[i];
    }

    return p;

}
