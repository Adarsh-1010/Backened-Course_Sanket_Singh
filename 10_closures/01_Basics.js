function todo(task){
    console.log("Start of todo");
    setTimeout(function exec(){
        console.log("completed",task);
    },5000);
    console.log("End of todo");
}
console.log("Starting");
todo("assignments");    //Calling todo
console.log("Ending");

// --> At the time instance when function fun will be called, the todo function is already over
// --> If exec is called after the completion of todo how the exec function is able to access the task variable
// --> This happens because of closure
// --> Closure is when a function remembers its lexical scope even when the function is executed outside that lexical scope.....
