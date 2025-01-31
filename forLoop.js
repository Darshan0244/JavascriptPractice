// Fibonacci Sequence using Function...!!!
// 0 1 1 2 3 5 8 13 21 34. . . . .
function fibonacci(n){
    let arr = [];// Store in an Array..

    let a = 0, b= 1, c;
    if(n==0)arr.push(a);
    
    if(n==1){
        arr.push(a);
        arr.push(b);
}
    else if(n>1){
    for(let i = 2; i<=n; i++){
        if(n>=0 && i<=2){
        arr.push(a);
        arr.push(b);
        }
            c = a + b;
            a = b;
            b = c;
            
            arr.push(c);
        }
    }
    return arr;
}
let ansFibonacci = fibonacci(10);
console.log(ansFibonacci);

//------------------------- Better Code for Fibonacci ---------------------------------

function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        let arr = [];// Store in an Array..
    
        if(n===1){
            arr = [0];
        }
        else if(n===1){
            arr = [0,1];
        }
        // if(n===2) 
        
        else{
            arr = [0,1];
            for(let i = 2; i<n; i++){
                arr.push(arr[arr.length-2] + arr[arr.length-1]);
            }
        }
        return arr;
        
    
    }
    