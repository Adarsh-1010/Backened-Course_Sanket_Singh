
var fun=10;
function gun(){
    console.log("hello world");
}
gun();
fun();//Here we will not get the reference error but we will get the type error because variable fun is available in the global scope....we are trying to execute a number as a function so we are getting type error....