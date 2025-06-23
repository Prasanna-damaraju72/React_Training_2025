
const data = 'I ma annasarP';
// const result = 'I am Prasanna';
const result  = data.split(' ').map((data) => {
    return data.split('').reverse().join('')
})

console.log(result)