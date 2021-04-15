console.log(isIsomorphic("dgg", 'aaa')); // true

function isIsomorphic(str1,str2) {

    if(str1.length !=str2.length) return false;

    let lmap = {};

    for(let i =0;i< str1.length;i++) {
        let a = str1[i];
        let b = str2[i];

        if(!lmap[a]) {
            // if b is assigned to some other char before.
            if(str2.indexOf(b) < i) return false;
            lmap[a] = b;
        } else if(lmap[a] !=b) {
            return false;
        }
    } 
    
    return true;

}