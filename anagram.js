const checkAnagram = (input1, input2) => {
    
    // input.split('').
    return input1.split('').sort().join('') === input2.split('').sort().join('');
}

console.log(checkAnagram('abcdb', 'dcbaw'));
console.log(checkAnagram('Listen', 'siLent')); //  checi
// checking its case sensitive true