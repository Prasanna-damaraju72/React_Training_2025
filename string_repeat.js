// const input = 'Prasanna';

// const result = input.repeat(3);
// console.log(result);


const repeatString = (str, sum=str, count=3) => {
    console.log(str, sum, count)

    if(count <= 1) {
        return sum
    }
    count--;
    repeatString(str, sum+str, count)

}

repeatString('AB');