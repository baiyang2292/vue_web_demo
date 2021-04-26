export const compareProperty =(property) =>{
    return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}

// 取两个对象的交集，
export const getMixedObj = (tar, ori) => {
    let obj = {};
    for(let k of Object.keys(tar)){
        if(ori[k] !== undefined){
            obj[k] = ori[k]
        }else {
            obj[k] = null
        }
    }
    return obj
}
