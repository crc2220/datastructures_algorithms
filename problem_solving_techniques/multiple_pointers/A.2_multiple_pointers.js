function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if (sum === 0){
            return [arr[left], arr[right]]
        }
        if(sum > 0){
            right--;
        }
        if(sum < 0){
            left++;
        }
    }
}

let answer = sumZero([-5,-4,-3,-2,-1,0,1,2,3,4,6])
console.log(answer);