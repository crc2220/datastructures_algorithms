function reverse(word){
    if(word.length <= 1) return word;
    // recursive + t;
    // recusive + e + t;
    // recusive + s + e + t;
    // t + s + e + t;
    return reverse(word.slice(1)) + word[0];
}
console.log(reverse("test"));