console.log("Start");
let id=setTimeout(function exec(){
    console.log("Hello");
},5000);
console.log("End");
console.log(typeof id);// In Node.js, the setTimeout function returns an object, whereas in browser environments, it returns a number. This difference arises due to how the two environments implement the setTimeout function.

//Note--> SetTimeOut, setinterval and many other function such as DOM functions are not natively known to javascript....these functionalities are provided by Run time environment ....
// --> Javascript alone is very weak 

//--> Node js is a runtime environment for java script developed by ryan dahl
//--> In nide js environment we got some other extra features other rhan browser run time such as access to file system and processes etc...



