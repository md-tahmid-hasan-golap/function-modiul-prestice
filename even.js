function evenSizeString(numbers){
    // console.log(numbers)
    let sum = 0;
    for(let num of numbers){
        if(num % 2 === 0){
            console.log(num)
            sum = sum + num;
            // console.log(sum)
        }
    }
    return sum

}

const number = [12, 44,78, 55, 33, 90];
const result = evenSizeString(number);
console.log(result)