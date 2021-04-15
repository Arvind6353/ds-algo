function reverseOnlyAlphabetical(str) {
    let alp = /[A-Za-z]/gi;
    let c = str.length -1;
    for(let i =0;i<str.length/2;i++) {
    /// 	sea!$hells3
      if(str[i].match(alp)) {
        while(!str[c].match(alp)) {
          c--;
        }
         str = join(str,i,c);
         c--;
      } else {
        console.log("skip", str[i]);
        continue;
      }
    }
    console.log(str)
    return str;
  }
  
  function join(str,i,c) {
    let strArr = [...str]
    let temp = strArr[i];
        strArr[i] = strArr[c];
        strArr[c] = temp;
    return strArr.join("");
  }
  
  