// let sentence = "My name is a golap"
// console.log(sentence)
// let newSentence = sentence.replace("golap", "Tahmid");
// console.log(newSentence)


// prestice task number - 1

// function gunfall (a, b, c, d){
//     const result = a * b * c * d;
//     return result;

// }
// const output = gunfall(5, 2, 2, 3);
// console.log(output);


// prestice task number - 2

function diff(number){
   if(number % 2 === 1){
    number = number * 2
    return number

   }
   
  
}
const output2 = diff(21)
console.log(output2)

// prestice task number - 3

function markAvarahe(numbers){
    let sum = 0;
    for(let num of numbers){
        console.log(num)
        sum = sum + num;
        console.log(sum)  
    }
    return sum

}

let mark = [10, 20, 30, 40, 50]
const result = markAvarahe(mark)
console.log('total mark ', result)