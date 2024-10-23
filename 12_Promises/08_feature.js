// Task 1: Write a function to download the data from URL
// Task 2: Write a function to save that downloaded data in a file and return the file name 
// Task 3: Write a function to upload the file written in previous step to a new URL....

function fetchdata(url){
    return new Promise(function (resolve,reject){
        console.log("Started downloading from the", url);
        setTimeout(function exec(){
            let data="dummy data";
            console.log("Download completed");
            resolve(data);
            // resolve(1234);  these lines will never be executed as promise is fullfilled only once
        },4000);
    })
}

function writefile(data){
    return new Promise(function (resolve,reject){
        console.log("Started writing",data);
        setTimeout(function exec(){
            let filename="output.txt";
            console.log("Filename written successfully");
            resolve(filename);
        },5000);
    })
}

function upload(file,url){
    return new Promise(function (resolve,reject){
        console.log("Started uplaoding the data");
        setTimeout(function exec(){
            let result="success";
            console.log("Uploading done");
            resolve(result);
        },6000);
    });
}

// Concept of consuming a promise.....
// The promise consumption is the main beauty using which we will avoid inversion of control.....
//  whenever we call a function returning a promise we will get a promise object which is like any js object that we can store in a variable 

// let response=fetchdata("www.google.com");

// Now the question is will js will wait here ?? on line number 42 
// ans: if creation of promise involves sync piece of code it will wait otherwise it will not wait.....

//Now technically when promise get resolved we have to execute some functions.....


// We can use .then() function on the promise object to bind the function we want to execute once we fullfill a promise......

// The .then() function takes function as an argument that we want to execute after promise fullfills....and the argument function takes value property as a parameter

// .then() function tabhi chalega jab fetchdata mein likha hua promise resolve hga 


// let downloadpromise=fetchdata("www.google.com");
// downloadpromise.then(function exec(value){     // This function exec is stored in on full fillment array
//     console.log("Download promise fullfilled");
//     let writepromise=writefile(value);
//     writepromise.then(function exec(value){
//     console.log("Writing of file completed");
//     let uploadpromise=upload(value,"www.google.com");
//     uploadpromise.then(function exec(value){
//     console.log("uploading data completed");
//     console.log(value);
//     })
//     })
// });

// Important: The problem of inversion of control is solved using promise here.....
// But this is still a call back hell or here we can call promise hell


// let downloadpromise=fetchdata("www.google.com");
// downloadpromise.then(function f(value){
 //   console.log(value);
 //   return "Adarsh";
// })
  
// The .then() function itself returns a new promise object 

// let downloadpromise=fetchdata("www.google.com");
// let x=downloadpromise.then(function f(value){
 //   console.log(value);
 //   return "Adarsh";
// });

//  x.then(function exec(value){
//      console.log(value);
// });



let downloadpromise=fetchdata("www.google.com");
downloadpromise.then(function exec(value){
    console.log("Downloading done with the value",value);
    return value;
})
.then(function exec(value){
    return writefile(value);
})
.then(function exec(){
    return upload(value,"www.google.com");
});
// The above code is called chaining of promise