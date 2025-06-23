const str='India dia India Country';
  
let result = str.split('').filter((data, index) => {
    console.log(data, index)
    return str.indexOf(data) === index
}).join('');

console.log(result)