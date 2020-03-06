export const numberToWord = (number)=>{
    let value = "one";
    if(number===1){
        value = "one";
    }
    if(number===2){
        value = "two";
    }
    if(number==3){
        value = "three";
    }
    if(number==4){
        value = "four";
    }
    if(number===5){
        value = "five";
    }

    return value;
}