let arr = [];
let count = 100;
function fizzBuzz(){

    while(count >= 100 ){
        if(count%3 === 0 && count%5 === 0){
            arr.push("fizzBuzz");
        }
        if(count%3 == 0){
            arr.push("fizz");
        }
        else if(count%5 === 0){
            arr.push("Buzz");
        }else{
            arr.push(count);
        }  
        count++;
    }
    
    console.log(arr);
}
fizzBuzz();
