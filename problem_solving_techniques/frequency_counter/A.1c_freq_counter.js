// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates 
// which accepts a variable number of arguments, and checks whether there are any duplicates  
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)


// if one or zero elements just return false
// could use a hash table and the moment you know you have to increment a count from 1 to 2 you return true

// Not sure about multiple pointers I guess i stays still while j looks through to find a dup
// So you would just need to sort and then shift (i, i+1)++ until you see a duplicate
// you could just create a javascript set and see if its length differs the arguments.length


function areThereDuplicates(...args) {
    // Two pointers

    // you sort them first [1,2,3,3,4,5,6,6,6
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
    //   if you see 3,3 then you return true
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
    }
    return false
}

function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}