
var inp = "The quick brown fox jumps over the lazy dog";

isPangram(inp);


function isPangram(str) {

     str = str.toLowerCase();

    let cmap = {};

    for(let c of str) {
        
        if(c!=" ")
        cmap[c.charCodeAt(0)-97] = 1;
    }
    console.log(cmap)
    let sum = 0;
    for(let i in cmap) {
        sum += cmap[i];
    }
    if(sum == 26) console.log("true");
    else console.log("false")

}