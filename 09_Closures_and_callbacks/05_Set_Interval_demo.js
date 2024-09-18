//Syantax:
// setInterval(callback function , time in millisecond);
//This function also return some unique id

setInterval(function exec(){
    console.log("task 1 done ");
},3000);   //this function exec will be executed after 3 seconds....and it will keep on executing at the interval of 3 seconds.....

let id=setInterval(function exec(){
    console.log("Task done");
},3000);
setTimeout(function(){
    console.log("Executed successfully");
    clearInterval(id);
},13000);
