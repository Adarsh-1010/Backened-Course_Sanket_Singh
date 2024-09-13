//Scopes:
//Que:What do you mean by scope?
// In simple words, scope is simply where to look for things.....What are we looking for? i.e. Variables and functions....  It simply means where the variables or functions can reside....
// We have more or less three types of scopes 
//1:Global
//2:function
//3:block

//Global Scope:
// If a varibale is present in global scope then it is accessible everywhere in the js file..
//But how do we define a variable in global scope ?
// There are many ways to declare a variable in global scope one of the way is to declare it outside a function......and it should not be declared within any block.....

var name="Adarsh";
function greet(){
    console.log("Hello",name);
    function test(){
        console.log("test");
    }
}
function fun(){
    console.log("Inside fun",name);
}
greet(); //since greet is not present inside any function or any block so greet and fun are present globally.....
fun();
// test(); We cannot call test globally because test is not present globally it is present inside a function greet....



//Function scope:
// In a function the visibility of a variable or a function is just inside the outer function.....

function fun(){
    var x=10;      //Here variable x is accessible inside the function fun or we can say it is local to fun.....
}

let name1="adarsh";
function abc(){
    console.log("Inside abc",name1);
    var x=10;
    function test1(){
        console.log("Inside test1",x);   //x can be accessed over here because x got the function scope of abc
    }
    test1();
    console.log(x);
}
abc();
// console.log(x);//X cannot be accessed outside because it has got the function scope of abc....



