let arr = [];
let count = 1;
function fizzBuzz(){
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
    console.log(arr);
}
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();

fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
