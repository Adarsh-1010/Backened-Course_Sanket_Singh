
//What is the difference between == and === ?
/*
   == operator checks only values  and this operator is known as abstract equality operator
   === operator checks values and type also  and this operator is known as strict equality operator
   The above said two statements are 100% wrong.....
*/

 /*
  Actually what happens both == and === checks the types but the difference is both of them do something different after checking the type....

  so == does type checking and if types are same it calls ====
  === checks types and if types are not same return false

  The main difference is
  --> abstract equality(==) does coercion if types are not same 
  --> strict equality(===) never does or perform coercion

 */


  /*
  Conclusions:
  (===):
  --> In js if any one of the operand is NaN then return false
  --> If x is a number and y is also a same number return true
  --> If x is +0 and y is -0 return true
  --> If x is -0 and y is +0 return true
  --> If x is undefined and y is also undefined return true
  --> If x is Null and is also null return true
  --> In case of string it will check character by character and of same length
  --> If x and y are both true or both false, return true; otherwise, return false.
  */
 console.log(NaN === NaN);//false
 console.log(0 === -0);//true
 console.log(2===2); //true
 console.log(NaN === 25);//false
 console.log(undefined === undefined);//true
 console.log(null === null);// true

 console.log("Sanket" === "Sanket");//true

 console.log("Sanket" === "SANKET");//false

//  console.log({a:10} === {a:10});
let x={a:10}
console.log(x===x);
// 1. console.log({a:10} === {a:10});
// Explanation: Here, you are comparing two different object literals {a:10} and {a:10} using the === (strict equality) operator.
// Result: false.
// Reason: In JavaScript, objects are compared by reference rather than by value. Even though both objects have the same structure and values ({a:10}), they are two different objects stored in separate memory locations. Since they are not the same object, the strict equality operator (===) returns false.
// 2. let x = {a:10}; console.log(x === x);
// Explanation: In this line, the object x is being compared to itself using the === (strict equality) operator.
// Result: true.
// Reason: The object x is being compared with itself, meaning both operands refer to the same object in memory. Since they are the same object, === returns true.



 



















