let user = {
    name: "arvind",
    age: "27",
    address : {
        line1: "line1",
        line2: "line2",
        location : {
            city :"chennai",
            state: "TN"
        }
    }
};

function traverseNestedObj(parent, obj, opObj) {

    for(let key in obj) {

        let outputKey = parent+"_"+key;

        if(typeof obj[key] != "object") {
            opObj[outputKey] = obj[key];
        } else {
            traverseNestedObj(outputKey,obj[key], opObj);
        }
    }
    return opObj;
}
console.log(traverseNestedObj("user", user, {}));



function traverseRecursiveObj(obj, opObj) {
    for(let key in obj) {
        if(typeof obj[key] !== "object" ) {
            opObj[key] = obj[key];
        } else {
            traverseRecursiveObj(obj[key], opObj);
        }
    }
    return opObj;
}

console.log(traverseRecursiveObj(user,{}));