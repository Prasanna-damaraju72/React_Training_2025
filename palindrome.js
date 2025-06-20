const isPalindrome = (word) => {
    return word === word.split('').reverse().join('')
}

console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("hello"));  // Output : false