//What is hoisting ?
// Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compile phase, before the code is executed. This means that you can refer to variables and functions before they are actually declared in the code. However, only the declarations are hoisted, not the initializations or assignments.
gun();
function gun(){
    console.log("shoot");
}
//Note:Hoisting is the direct consequence of lexical scoping that happens in javascript  due to which we are able to access some functions and variables before declaring them......which gives us notion that they are moved up in the file..... 

function fun(x,y){
    //Here arguments x and y will get the function scope
}

