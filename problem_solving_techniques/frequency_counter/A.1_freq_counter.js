generateCounter = (str) => {
    let obj = {};
    for (char of str) {
        obj[char] = isNaN(obj[char]) ? 1 : obj[char] + 1;
    };
    return obj;
}
validAnagram = (a, b) => {
    if(a === b) return true;
    if(a.length !== b.length) return false;
    
    let counter_1 = generateCounter(a);
    let counter_2 = generateCounter(b);
 
    for (let key in counter_1) {
        if (
            !counter_2.hasOwnProperty(key) 
            || 
            (counter_2[key] !== counter_1[key])
        ) {
            return false;
        }
    }
    return true;
}
let string_1 = 'tsstest';
let string_2 = 'testsst';
let isValid = validAnagram(string_1, string_2);
console.log(isValid);