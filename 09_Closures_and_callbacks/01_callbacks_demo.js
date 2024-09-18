/*
 SetTimeOut and SetInterval:
 These two functions are not by default provided by js....
 Then how we are able to use it ?

 SetTimeOut:
 It is a function that heps to execute some tasks once after certain timer
 SetInterval:
 It is a function that heps to execute some tasks again and again after given interval

*/

//Callbacks:
// A callback function is a function that is passed to another function as an arguments
// f(g(x)) --> g(x) is a callback function

function fun(x,fn){     //Here we are consuming the call back function
    // x -->Number
    // fn --> callback function

    //some logic:

    for(let i=0;i<x;i++){
        console.log(i);
    }
    fn();  //Calling the callback passed
}

fun(10, function log(){
    //this is the callback function
    console.log("Custom logger");
    
});

fun(5,function(){
    console.log("Anonymous function");    //this is another way to pass function which is anonymous
});

let g=function gun(){
    console.log("This is also a function expression");
}

fun(5,g);     //This is another way to pass the function which is another type of function expression

// fun(5,g()); Never pass function like this g()...as u are immediately executing the function then and there only .....so what we are calling is g(5, undefined)  which throws error
