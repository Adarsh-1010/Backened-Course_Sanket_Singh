for(var i=0;i<4;i++){
    setTimeout(function exec(){
        console.log("Hi",i);
    },i*1000);
}
// -->var is function-scoped, meaning there is only one shared i variable for the entire loop. When the setTimeout callbacks are executed, the loop has already completed and the value of i is 4 (the value i takes after the loop ends).
// Because all setTimeout callbacks reference the same i (closure over the same i variable), they all print the value of i as 4 when they execute.
// The time delays (0 ms, 1000 ms, 2000 ms, 3000 ms) are respected, but the value of i is 4 in every callback.

