// How can we write a function to download some data from a url without using callbacks?
// Syntax of promise.....

// return new promise(function (resolve,reject){

//  });

function fetchdata(url){
    return new Promise(function(resolve,reject){
        console.log("Started fetching from",url);
        setTimeout(function process(){
            let data="Dummy Data";
            console.log("Completed fetching data");
            //Some how we want to return the data 
            resolve(data);             //This acts as a return function this helps in returning the value from asynchronous function.....
        },4000);
    });
}

// Important Notes:
// To create a promise call the promise constructor(new promise)....
// Promise constructor takes a callback as an argument
// The callbacks inside a promise constructor expects two arguments resolve and reject
// Then write any logic inside callback function 

// If you want to return something call the resolve function and pass the value to it which you want to return 

//Promise is given by javascript.....
// Creattion of promise object is synchronous




















