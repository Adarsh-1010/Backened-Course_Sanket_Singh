function a(name){
    return function b(){
        console.log(name);
    }
}

let x=a("sanket");  //function b will always remebers the lexical scope 
console.log(x);
x();    