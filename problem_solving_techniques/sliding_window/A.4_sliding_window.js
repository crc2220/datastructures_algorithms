
function maxSum(arr, n, k){ 

    if (n < k) { 
        console.log("Invalid"); 
        return; 
    }

    // 1. Initial max_sum
    let max_sum = 0; 

    for (let i = 0; i < k; i++) {
        max_sum += arr[i];  
    }

    // 2. Start to shift forward and compare to Initial max_sum
    let window_sum = max_sum; 
    for (let i = k; i < n; i++) { 
        window_sum += arr[i] - arr[i - k]; 
        max_sum = Math.max(max_sum, window_sum); 
    } 
    return max_sum; 
} 

let max = maxSum([1,2,3,4,5,6], 6, 2);
console.log(max);