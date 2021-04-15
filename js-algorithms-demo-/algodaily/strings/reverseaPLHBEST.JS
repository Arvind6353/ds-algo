function reverseOnlyAlphabets(str) {
    let alp = /[A-Z]/gi;

    let c = str.length - 1 ;

    for(let i = 0; i <= str.length / 2; i++) {

        if(str[i].match(alp)) {

            while(!str[c].match(alp)) c--;

            str = swap(str,i,c);
            
            c--;
        } 
    }

    return str;

}

function swap(str,i,c) {
    let s = [...str];
    let temp = s[i];
    s[i] = s[c];
    s[c] = temp;

    return s.join("");
}