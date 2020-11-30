// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

let sameFrequency = (num_1, num_2) => {
    if(num_1 === num_2){ return true; }
    num_1 = num_1.toString();
    num_2 = num_2.toString();
    if(num_1.length !== num_2.length){ return false; }
    let num_1_hash = {}
    let num_2_hash = {}
    for (num of num_1.split('')){
        num_1_hash[num] = num_1_hash[num] !== undefined ? num_1_hash[num] + 1 : 1;
    }
    for (num of num_2.split('')){
        num_2_hash[num] = num_2_hash[num] ? num_2_hash[num] + 1 : 1;
    }
    for (num in num_1_hash){
        if(!num in num_2_hash){
            return false;
        }
        if(num_1_hash[num] !== num_2_hash[num]){
            return false;
        }
    }
    return true;
}

let test1 = sameFrequency(182,281) // true
let test2 = sameFrequency(34,14) // false
let test3 = sameFrequency(3589578, 5879385) // true
let test4 = sameFrequency(22,222) // false
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);

