//ToString:
//We can use + operator to mimic ToString..

/*  a + b   
 let lval=a   and rval=b

 lprim=ToPrimitive(lval);
 rprim=ToPrimitive(rval);
 if(lprim is a string or rprim is a string )
 we do string concatenation
 lnum=ToNumber(lprim);
 rnum=ToNumber(rprim);
 return lnum+rnum;
 */

 //Conversion:
 /*
 undefined --> "undefined"
 null --> "null"
 true --> "true"
 false --> "false"
 symbol --> TypeError
 NaN --> "NaN"
 +0 , -0 --> "0"
 3.145 --> "3.145"
 if number is infinity --> "infinity"

 [] --> ""
 [1,2,3] --> "1,2,3"
 [null,undefined] --> ","
 [null] --> ""
 [undefined] --> ""
 [[],[],[],[]] -->",,,"
 [,,,,] --> ",,,,"
 
 */

console.log("Sanket" + "singh");
/*
Both of them are already a string 
so ToPrimitive conversion will also be in string 
So we concatenate them
*/
console.log(undefined + "node");
/*
undefined --> "undefined"
"undefined" + "node" --> "undefinednode"
*/
console.log("5" + null);
/*
null --> "null"
"null" + "5" --> "5null"
*/
console.log("Sanket" + true);
/*
true --> "true"
"Sanket" + "true" --> "Sankettrue"
*/














