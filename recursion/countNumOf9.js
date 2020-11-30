function isNum(num, arr_num){
    return (arr_num === num ? 1 : 0);
}
function numOf9s(arr){
	if(arr.length === 1){
		return isNum(9, arr[0]);
    }
    return numOf9s(arr.slice(1)) + isNum(9, arr[0]);
}

let num9s = numOf9s([2,2,9,3,1,5,9,9]);

console.log(num9s);
