
//Note: In javaScript we can pass function as an argument to another function......

function fun(){
    console.log("fun called");
}

function gun(fn){
    console.log("Inside Gun");
    fn();
    console.log("leaving gun");
}
gun(function (){                  //This is function expression
    console.log("new function passed");
});
  
gun(fun);   

//Note: function expressions are of two types
//1:Anonymous function
//2:Named function

// Anonymous Function: It is un-named functions expression.
var x=function(){
    //implementation....
}
abc(function(){
    //implementation.....
});
//This is not the good way to write the code.....this will create problem when we write the bigger code or industry level code.....we are always recommended to write meaningfull names for the variables or function names....
//Anonymous functions are hard to debug....
//Recursion is also tricky in lots of cases.... we can use arguments.callee to use function recursively....








