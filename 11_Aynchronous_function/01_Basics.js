// How java script handles asynchronous functions?

// --> Java script is a single threaded language....
//--> JavaScript is single-threaded by design, meaning it executes code one operation at a time on a single main thread.
//--> Javascript by default supports synchronous code execution...

console.log("start");
for(var i=0;i<100000000000;i++){

}
console.log("end");
// --> The above property of sunchronous code execution only works for operation that are natively known to js....