//Syntax:
// setTimeout(callback function , time in millisecond);

// setTimeout(function execute(){
//     console.log("Hello");
// },3000);     //After 3 sec it will get executed

//Note:The setTimeout function is indeed part of JavaScript, but it is a feature provided by the browser environment and Node.js runtime, not part of the core JavaScript language itself.
 // --> setTimeOut function returns some unique id 

let id1= setTimeout(function execute(){
    console.log("task 1 completed");
},10000);

let id2=setTimeout(function execute(){
    console.log("task 2 completed");
    clearTimeout(id1);    //it removes the first timer
},5000); 
console.log(id1);  //it prints an object 