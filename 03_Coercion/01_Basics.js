//Four pillars of javascript: coercion , scopes , asynchronous , classes and objects
// Coercion:
//--> Coercion stands for type interconversion
// -->It is of two types....
// 1:Explicit   This means we forcefully converts the type of values
// 2:Implicit   This means javascript internally converts the type of values 

//--> In c++ java C.. types exists for variables like for example int x=10, so variable x is of int type
// -->In javascript types exists for values

// Note: Everything in Javascript is an object --False
// Everything in javascript is an object except all primitive types....

// Que:What is abstract operations?
// In JavaScript, abstract operations are internal helper functions or operations that are used in the ECMAScript specification to define the behavior of the language, but they are not directly accessible or exposed in the JavaScript language itself. Example: ToPrimitive, ToBoolean, IsCallable.......
// Example:


// --> First abstract operation that we need to learn is ToPrimitive 
// -->The ToPrimitive abstract operation takes an input argument and an optional preferred type argument
// --> This operation converts the input to a non object type values ....
// --> If an argument is capable of getting converted into more than one primitve type then the function uses preferred type argument to resolve it 
 
// Note: In case of ToPrimitive Javascript convert object into string or number....most likely

// -->Subtraction Operator(-):
//In case of subtraction operator javascript tries to convert leftside and rightside to number..... 

console.log(1-"1");//0
console.log("1"-"1");//0
console.log(1-"2");//-1
console.log(undefined-10);//NaN
console.log(1-"abcd")//NaN
console.log("abc"-9);//NaN
console.log(true-"false");//NaN
console.log(true-false);//1
console.log([null]-5);//-5
console.log([undefined]-10); 
console.log(10-"070");//60
// --> Addition Operator(+):

//1:If one of the operands are non primitive then firstly ToPrimitive function is called to make it primitive
//2:Now both the operands are primitive 
//3:Now if any one of the operands are string then string concatenation is done and string is returned
//4:if both the operands are number then simple mathematical addition is done....
//5:If the operands are not numbers then javascript call ToNumber to convert the operands into number and then simple mathematical addition is done....

console.log(undefined + "10");//undefined10
console.log("123"+null);//123null
console.log(undefined+10);//NaN
console.log(null + 10);//10
console.log(undefined + undefined)
console.log(1+"abcd");//1abcd

// The + operator in JavaScript is used for both numeric addition and string concatenation.
// Since neither undefined nor true are strings, JavaScript will attempt numeric addition by converting both values to numbers.
// Type Conversion

// JavaScript uses type coercion to convert undefined and true into numbers, because the + operator expects numbers.

// undefined gets converted to NaN (Not-a-Number):

// In JavaScript, undefined cannot be converted into a meaningful number, so it is coerced into NaN (a special value used to represent an invalid number).
// true gets converted to 1:

// In JavaScript, true is treated as 1 in numeric contexts, and false is treated as 0.


// ToNumber:
// undefined-->NaN  It is an representation of invalid number
//Null-->0
//true-->1
//false-->+0
//symbol-->type error
//object-->ToPrimitive is called and then conversion takes place....

//""-->0
//"0"-->+0
//"-0"-->-0
//"3.14"-->3.14
//"0."-->0
//"."-->NaN
//"12+3"-->NaN
//[null]-->0
//[undefined]-->0
//[""]-->0
//[1,2,3]-->NaN
//"abc"-->NaN


console.log(10-{a:10});//NaN
console.log(10-{a:10,valueOf(){return 8;}})//2
// Reason:
//hint-->"number" then valueOf is called and if value of does not return primitive then toString is called
//hint-->"String" then toString is called and if value of does not return primitive then toString is called
console.log([undefined,null]-1);











