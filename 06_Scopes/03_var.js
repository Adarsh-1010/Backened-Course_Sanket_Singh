
//Var: Whenever we use a var inside a function the variable gets the function scope ....If we use it outside a function no matter if it is enclosed in a block or not it will give the variable global scope....

{
    var x=10; //becomes global due to var
    console.log(x);//10
}
console.log(x);//10 beacuse x has become global as it is not wrapped inside a function

function fun(){
    console.log("Inside fun",x);
}
fun();

function abc(){
    console.log(y); //why we are getting undefined? --> Due to Lexical Scoping we will study later
    var y=20;
    console.log(y);
}
abc();

if(true){
    var a=30;  //This ia called formal declaration ....Declaration with let var and const are called formal declaration....
}
if(false){
    var b=40;
}
console.log(a);
console.log(b);   //This proves that javascript is not interpreted language  
// Explanation:
// The if(false) block will not execute because the condition is false. Therefore, the statement var b = 40; will not run.

// However, in JavaScript, variables declared with var are function-scoped (or globally-scoped if declared outside a function). They are hoisted to the top of their scope but initialized as undefined until the actual assignment.

// In this case, var b is hoisted to the top of the current scope (which is the global scope, as it is not inside a function), but the assignment b = 40 is never executed because the if block does not run.

// When console.log(b); is called, b is already declared (because of hoisting), but its value is undefined since the assignment was skipped.