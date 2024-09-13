//Arithmatic Operators:
//An arithmetic operator is a mathematical symbol used in programming languages to perform basic arithmetic operations on numerical values (operands)....

console.log(10+2);//Addition
console.log(10-2);//subtraction
console.log(10*2);//multiplication
console.log(10/2);//division    It is normal division operator not floor division operator
console.log(10%2);//modulus
console.log(10**2);//exponential

// Note: If we want floor value divisions......
//  1 way: parseInt(5/2);
//  2 way: Math.floor(5/2);


//Assignment Operators:
// These are used to assign values....

let x=10;//Assigning the value 10 to the variable x
x+=2// x=x+2 First add 2 to the x and then assign to the variable x
x-=2//x=x-2
x*=2//x=x*2
x/=2//x=x/2
x%=2//x=x%2

//Logical Operators....
// 1:logical AND &&
// 2:logical OR ||
// 3:logical NOT !

//IMP NOTE: for logical operators the operands are evaluated to booleans and then operators are applied....

console.log((10>5) && (7<6));
console.log((10>5) || (7<6));
 
console.log(4 && 0); //0  if the first value is true then we check for the second value and return that
console.log(4 || 0); //4  if the first value is true then we dont need to check the second value just return the first value only
console.log(0 && 4); //0 if the first value is false then we dont check the second value just return the first value only
console.log(0 || 4); //4 if first value is false then we check the second value and return that second value only...

console.log(4 || 5); //4

console.log(-4 || 5)//-4  Negative values are considered as truthy values

console.log(3 && 4)//4


// The above concept is called short circuiting...
// Short-circuiting in JavaScript refers to a behavior in logical operations where the evaluation stops as soon as the result is determined. This happens with the logical AND (&&) and logical OR (||) operators.

// In JavaScript, logical operators (&&, ||, and !) return one of their operands (a value) based on specific conditions rather than strictly true or false. 

// Examples:
// let result = 0 || false || "hello";
// console.log(result); // Output: "hello" (first truthy value)

// result = "" || 0 || null;
// console.log(result); // Output: null (all operands are falsy, so the last one is returned)

// let result1 = 42 && "hello" && true;
// console.log(result1); // Output: true (all are truthy, so the last one is returned)

// result1 = 42 && null && "hello";
// console.log(result1); // Output: null (null is the first falsy value)

