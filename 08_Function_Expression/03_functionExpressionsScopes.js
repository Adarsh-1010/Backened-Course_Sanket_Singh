//Scope of function expression....

var x=function fun(){       
    console.log("gun");
}

console.log(x); //Now x stores the reference of the function fun 
x();

//Note: x is global scoped and conatins function reference....
// fun is not global scoped it is in the scope of x .....not present globally
//function Name Scope (Local to the Function Body): The name fun is a named function expression, which means the name fun is only accessible inside the function itself.


a();        // Type Error because a contains value undefined and value undefined cannot be executed as a function ..... This can be understood by doing parsing and execution .....
var a=function abc(){       
    console.log("gun");
}


//Important concept:
gun();
function gun() {
    console.log("shoot");
}

a();
var a = function gun() { 
    console.log("shoot");
}

//Function Declaration: In the first example, gun is a function declaration, which gets fully hoisted (including its body). This is why you can call gun() before its definition and it works.

//Function Expression: In the second example, a is defined as a variable with a function expression. The variable a is hoisted, but only as undefined. The function assignment happens later, so when you try to call a() before it's assigned, it throws an error.
















