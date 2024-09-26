function todo(task){
    console.log("Start of todo");
    setTimeout(function exec(){
        console.log("completed",task);  // this function exec remembers the scope of function todo and it remembers only variable name not its value ....so as the value changes it reflects in the exec function
    },5000);
    task="dayanand";
    console.log("End of todo");
}
console.log("Starting");
todo("assignments");    //Calling todo
console.log("Ending");
