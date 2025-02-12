function evenSizeString(str){
    const size = str.length;
    console.log(str, size);


    if(str % 2 === 0){
        console.log("even number")
    }
    else{
        console.log("Odd number")
    }

}

evenSizeString("dhaka");
evenSizeString("faka")

