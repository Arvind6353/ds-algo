let arr = [1, 3, 5, 7, 8];

function binarySearch(arr,elem) {

    let len = arr.length;
    let low = 0;
    let high = len -1;
    while(low<=high) {


        let mid = Math.floor((low+high)/2);

        if(arr[mid] === elem) return mid;
        else if(arr[mid] > elem) {
            high = mid - 1;
        } else if(arr[mid] < elem) {
            low = mid + 1;
        }

    }
    return -1;

}

console.log(binarySearch(arr, 3));


/****************************** */


function binarySearchRecur(arr, elem , low , high) {

    if(low>high) return -1;

    let mid = Math.floor((low+high)/2);
    if(arr[mid] == elem) return mid;

    else if(arr[mid] > elem) {
        return binarySearchRecur(arr,elem,low,mid-1)
    } 
    else if(arr[mid] < elem) {
        return binarySearchRecur(arr,elem, mid+1,high)
    }

}

console.log(binarySearchRecur(arr,1,0, arr.length-1));






