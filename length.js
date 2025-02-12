function stringseven(sity){
    const size = sity.length;
    console.log(sity, size);
    if(size % 2 === 0){
        console.log("even number")
        return true
    }

else{
    console.log("Odd Number")
    return false
}

}
const output = stringseven("rajshahi");
console.log(output)
const output2 = stringseven("dhaka");
console.log(output2)