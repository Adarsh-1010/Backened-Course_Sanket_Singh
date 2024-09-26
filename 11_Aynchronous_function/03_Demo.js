function process(){
    console.log("start");
    setTimeout(function exec(){
        console.log("Executed task");
    },3000);
    for(var i=1;i<10000000000;i++){

    }
    console.log("end");
}
process();
console.log("Tata");

// Que:We can easily do task that takes lot of time to complete without blocking the code flow ...how?

// -->Call stack:The call stack in JavaScript is a mechanism that the JavaScript engine uses to manage the execution of functions.Whenever a function is called, the JavaScript engine adds (or "pushes") that function to the top of the call stack.

// -->Event Queue:The event queue (or task queue) in JavaScript is a queue that stores asynchronous tasks (such as I/O operations, timers, promises, and user interactions) that are waiting to be processed by the JavaScript runtime.

// Event loop: It is an infinite loop that continuously checks for the two conditions () if full fills then asyncronous task are executed from event queue

// --> The condition to start executing the task from the event queue is that :

//--> The call stack should be empty i.e no function in the call stack should be left 
// --> The global code is also done 