function demo1(){
    return new Promise(function (resolve,reject){
        console.log("Hii");
        setTimeout(function process(){
            console.log("Wooho task done");
            resolve("Students are the best");
        },10000);
        console.log("Bye");
    })
}
y=demo1();
console.log(y);

// When do we consider a promise fullfilled?
// if we call resolve() function we consider it fullfilled 
// we will consider it rejected when we call reject()

function demo2(){
    return new Promise(function (resolve,reject){
        console.log("Start");
        setTimeout(function process(){
            console.log("Completed timer");
            if(val%2==0)
                resolve("even");
            else
                reject("odd");
        },10000);
        console.log("Somewhere");
    })
}