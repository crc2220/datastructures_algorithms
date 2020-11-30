function countUniqueValues(arr){
    if(arr.length === 0){
        return 0;
    }
    if(arr.length === 1){
        return 1;
    }
    // could have used a standard for loop instead of below
    let i = 0;
    let j = 1;
    // now i is 5
    // check if you see another 5 with j
    // nope so go to 6, do same thing
    // you see 7 so set i as 7 and check if another 7 exists with j
    // yup another 7 exists so keep going forward to find a unique value
    while(j < arr.length){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
        if(arr[i] === arr[j]){
            j++
        }
        
        // console.log("arr", arr);
    }
    return i+1;
}

let answer = countUniqueValues([2,2,2,5,6,7,7])
console.log(answer);