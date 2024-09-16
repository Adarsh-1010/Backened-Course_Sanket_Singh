//ToPrimitive:
//This function takes an input arguments and tries to converts it into a primitive types (non-object types)...If it cannot convert it can throw error....
// It takes one more optional parameters called as preferred type , if we have 2 or more than 2 values that can become answer this optional argument helps us.....
// If preferred type is not given hint = "default"
// If preferred type is string hint = "string"
// If preferred type is number hint = "number"
// If hint is default hint = "number"
// Then it internally calls OrdinaryToPrimitive abstract operation function

/*
   if hint=string 
  we will first call toString()....if it becomes non object then return non object ....else 
  we will call valueOf()  if it becomes non object then return non object ....else throw error


   
   if hint=number 
  we will first call valueOf()....if it becomes non object then return non object ....else 
  we will call toString()  if it becomes non object then return non object ....else throw error
*/

//Important Note: valueOf() and toString() is not abstract operation that means we can call them manually

// Note: By default toString()  on an object  returns "[object,object]"
// Note: By default valueOf()  on an object  returns same object

let obj={
    "English":90,
    "Maths":100
}

console.log(obj.toString());
console.log(obj.valueOf());


/* Now for an array:
valueOf() will return the same array
toString() will return array without brackets
*/
let x=[1,2,3];
console.log(x.toString());
console.log(x.valueOf());

