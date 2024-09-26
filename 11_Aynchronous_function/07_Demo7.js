for(var i=0;i<4;i++){
    setTimeout(function exec(){
        console.log("Hi",i);
    },i*1000);
}
// let is block-scoped, which means a new instance of i is created for each iteration of the loop. Each setTimeout callback captures a unique i value.
// When the setTimeout callbacks are executed after their respective delays (0 ms, 1000 ms, 2000 ms, 3000 ms), they reference the value of i that was scoped to that specific iteration of the loop.
// This is why you get the expected output, where each setTimeout callback logs the correct value of i (0, 1, 2, and 3) at the appropriate time.