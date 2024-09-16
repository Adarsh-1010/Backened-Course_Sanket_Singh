
//Every language has got some mechanism for type interconversion....for example in java if we do 
// System.out.println("Hello"+22);
//The above code will print Hello22 i.e. it did convert from number to string and then did concatenation

//For javascript things are a bit more tricky as javascript handles wide variety of cases....


//Abstarct Operations:These are operations or functions which are not available for end users to use...But javascript internally uses it and these are mentioned in the official docs to actually aid the documentation...
//Few abstract operations that we are going to focus:
//1:ToString
//2:ToNumber
//3:ToBoolean
//4:ToPrimitive

//The above function we cannot them directly but few javascript operations like '+'(addition),'-'(subtraction) etc internally calls them and hence we can mimic them using these operations ....


//1:ToNumber:

//We can use - operator to mimic ToNumber.....
// Example:
// a - b   let a be lval and b be rval
// lnum=ToNumber(a);
// rnum=ToNumber(b);// return lnum-rnum;

//Note: subtraction operator always converts both the operands to a number

console.log(12 - 4)//both of them are already a number so we just subtract

console.log(undefined - 3);
/* Undefined is not a valid number so we make it undergo ToNumber abstract operation
 ToNumber(undefined) --> NaN
 NaN - 2 --> When we do any operation with NaN it results in NaN....
 NaN - 2 --> NaN
 */

console.log(null - 5);
/* null is not a valid number so we make it undergo ToNumber abstract operation
 ToNumber(null) --> +0
 +0 - 5 --> -5
 */

 console.log("132" - 10);
 /* "132" is not a valid number so we make it undergo ToNumber abstract operation
 ToNumber("132") --> 132
 132 - 10 --> 122
 */

console.log("132fd" - 10);
/* "132fd" is not a valid number so we make it undergo ToNumber abstract operation
 ToNumber("132fd") --> NaN beacuse this string cannot be parsed to a number
 NaN - 10 --> NaN
 */

//  console.log(Symbol("123") - 10);  Throws type error cannot convert symbol to a number

console.log(4 - true);
/* true is a boolean so we make it undergo ToNumber abstract operation
 ToNumber(true) --> 1
 4 - 1--> 3
 */

 //To Number conversion:
 /*
 "" --> 0
 "0" --> 0
 "-0" --> -0
 "   009  " --> 9
 "3.145" --> 3.145
 "0." --> 0
 ".0" --> 0
 "." --> NaN
 "$" --> NaN


 "0xaf"--> 175  because this is valid hexadecimal number so it can be parsed to a number 
 "ab32" --> NaN

 [] --> 0
 [""] --> 0
 ["0"] --> 0
 ["-0"] --> -0
 [null] --> 0
 [undefined] --> 0
 [1,2,3] --> NaN
 [[[]]] --> 0


 */

 console.log("0xf" - 1);
/* "0xf" is not a valid number so we make it undergo ToNumber abstract operation
 ToNumber("0xf") --> 15 because this string is starting from 0x so it represent a hexadecimal number and it can be converted to a number  
 15 - 1 --> 14
 */

 console.log("0xz" - 1);
 /* "0xz" is not a valid number so we make it undergo ToNumber abstract operation
 ToNumber("0xz") --> NaN because this string is starting from 0x so it represent a hexadecimal number but here z does not represents a valid hexadecimal number and hence it cannot be converted to a number  
 NaN - 1 --> NaN
 */

 console.log("0o11" - 1);
 /* "0o11" is not a valid number so we make it undergo ToNumber abstract operation
 ToNumber("0o11") --> 9 because this string is starting from 0o so it represent a valid octanumber and it can be converted to a number  
 9 - 1 --> 10
 */









