//Comparison Operator:

// > greater than
// < less than
// >= greater than equal to
// <= less than equal to
// != not equal to           we will study in coercion
// !== strict not eqaul to   we will study in coercion
// == abstract equality      we will study in coercion
// === strict equality       we will study in coercion

// String based operator --> +
// --> concatenate the two strings and return the new one

console.log("Adarsh" + "Pathak");

//Bitwise Operators:
//--> These operators does not directly operates on numbers but instead operate on binary representation of numbers

// --> bitwise and - &
// --> bitwise or - |
// --> bitwise xor - ^
// --> bitwise not - ~
// --> bitwise leftshift - <<
// --> bitwise rightshift - >>

console.log(5 & 2);
console.log(4 | 2);
console.log(3 ^ 3);
console.log(5 << 2);
console.log(5 >> 1);// 101 ->  10

console.log(-0 >> 0);//0

console.log(5+5+"5"+5+5); //10555  we will study in coercion

// Ternary operator:
// (condition) ? (Expression 1):(Expression 2)
// If condition is true Expression 1 is evaluated 
// If condition is true Expression 2 is evaluated

console.log((5>2)? "Adarsh":"Pathak");

// *****Statement and Expression*****
// A complete executable code is a statement
// let a =10;
// An expression is a part of statement
// a=1+(x+2);  here x+2 is an expression

let x=(2>3)?"Adarsh":null
console.log(x);

console.log(2**4);//Exponential operator

//Unary Operator:
let y=10;
let c=y++;  //First assign y to c and then increament y this is called post increament
let z=y++;
console.log(y,c,z);

let a=10;
let b=++a; //First increament the value of a and then assign to the variable b this is called pre increament
let d=++a;
console.log(a,b,d);
 
let va=10;
va++;  //Increamented the value of va....
console.log(va);

console.log(va++);//first print the value of va and the increament the value of va......
