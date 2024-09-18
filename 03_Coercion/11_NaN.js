//NaN:-->Not a Number
//typeof NaN -->number
// --> It does not actually mean not a number rather it gives a notion of an invalid number
console.log(NaN === NaN) //false
console.log(NaN == NaN)// false
// NaN is the only primitive value in js that does not follow identity property and is not equal to itself.....

//How can we detect if any variable is NaN or not?

//isNaN():
// This NaN function coerces the argument before checking for NaN ...Now string is not NaN right?..But when we convert string like "abc" to a number it becomes NaN and hence isNaN() returns true.....

let a="10";
let b="abc";
let c="sanket";
let d=10-c;
console.log(isNaN(a));//false
console.log(isNaN(b));//true
console.log(isNaN(c));//true
console.log(isNaN(d));//true

//Number.isNaN() function:
// Number.isNaN() does not coerces value....
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("abc"));

//JavaScript, as a language, provides features like variables, loops, functions, and more. However, things like console.log(), alert(), document, and many others are provided by the runtime environment (like a web browser or Node.js) where JavaScript is executed.

// In browsers, console.log() is used to output messages to the console, and it's part of the console object, which is part of the browser's environment.
