// Function Syntax:

// function <function name>(){
//     ...........
//     ...........
//     return x;
// }

// Note: Return keyword is not mendatory if we dont put return statement it automatically returns undefined.....
// Every function return something ......

function fun(x){
    console.log(x+10);
    return x*10;
}
console.log(fun(10));

// Note:To catch the return value of the function either we use a variable or console.log()....

//Some Important Points:
//--> return keyword returns an output out of the function and immediately stops the function execution.....

console.log(console.log(10));//10 and undefined 


let x=console.log; //Isko samajhana hai .....
x(9);















