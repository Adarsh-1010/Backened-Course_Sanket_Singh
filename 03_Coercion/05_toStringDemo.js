
console.log("Sanket" + {a:10});
/*
  Since it is a plus operator so it will check lval and rval is primitive or not
  "Sanket" is already a primitive
  {a:10} is not primitive so we will call toPrimitve without the hint ....
  that means hint = number
  we first call valueOf() on {a:10} and it returns the same object {a:10} which is not primitive
  so now we will call toString() it will return "[object,object]" which is a string i.e. primitive 
  Now "Sanket" + "[object,object]" --> "Sanket[object,object]"
  
*/

console.log(10 - {a:10});
/*
 10 is already a number
 {a:10} is going to be converted ToNumber and {a:10} this is an object 
 for object we will call toPrimitive with a hint="Number"
 first we will call valueOf()--> it returns the same Object --> {a:10}
 then we will call toString and it returns "[object,object]" which is a primitve value
 so now call toNumber on "[object,object]" again which is non converatble to a number ab=nd it gives NaN
 therefore 10 - NaN --> NaN
*/

let x={b:90, valueOf() {return 2}};
console.log(x - 10);
/*
  Since x is an object we need to pass it to ToPrimitive with hint=number
  we will call valueOf() it will return 2 which is a primitive 
  so x becomes 2 and 10 is already a number 
  2 - 10= -8
*/

let y={b:90, valueOf() {return 2;}, toString(){return "custom"}};
console.log(y + "Sanket");
/*
  Since y is an object we need to pass it to ToPrimitive with default hint=number
  we will call valueOf() it will return 2 which is a primitive 
  so y becomes 2 and "Sanket" is already a primitve 
  2 + "Sanket"--> 2Sanket
*/

console.log("Sanket" + {b:90, valueOf() {return {};}, toString(){return {}}}) //Throws Error