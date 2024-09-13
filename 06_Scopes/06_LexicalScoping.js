
//How javascript parses the code .....
//We know that javascript is not interpreted it is hybrid i.e. compiled + interpreted

//very Important:
//So whenever we try to execute javascript code javascript first parses the whole code, in this parsing phase it assign scopes to variables or functions ...Once done then it reads the code and executes it....

//Every variable in your code will be used in one of the following ways....
//1:Either it will be getting value assigned i.e. it is used as a target   eg: x=10;
//2: Or it will be used to retreive the value i.e. it will be used as a source   eg: y=10+x;

//what js will do ....it will start the parsing phase ....Outside everything it maintains the global scope...but the moment it goes inside a function it starts maintaining scope of that function also.....

var teacher="Sanket";
function fun(){
    var teacher="pulkit";
    console.log(teacher);
}
fun();

//phase 1:Parsing Phase:

//We will just do scope resolution.....ony to the formal declared variables and functions....
//Whenever we declare a variable using let var const it is a formal declaration....or initializing a function is also a formal declaration....
//Whenever we go inside a function it starts maintaining the scope of that function also..... 

// Phase 2: Execution Phase:
//Remember this while solving the questions : Hey scope manager do u know about the variable teacher.....
//Sbase pehle nearest scope ke pass jayega uske baad outer scope ke pass jayega

var teacher1="Sanket";
function fun1(){
    var teacher1="pulkit";
    console.log(teacher1);
}
console.log(teacher1);
fun1();
// console.log(teacher1);  Try this one also

















































































