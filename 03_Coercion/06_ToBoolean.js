
//ToBoolean:
//The ToBoolean abstract operations converts the given type to a boolean value...The ToBoolean works differently when compared to ToString or ToNumber....It maintains the list of values which when received as an arguments returns false....And everything apart from the list of  values return true....

/*
 List of falsy values:

 null
 undefined
 +0
 -0
 NaN
 "" Empty String
 false
  
 if we get any one of these values in the arguments we return false else we return true
*/

//How can we test the ToBoolean operation?
// --> We can use logical Not operator(!)
/*
  !variable
  old value= ToBoolean(variable)
  if old value is true it returns false
  else
  returns true
*/

console.log(!0);
/*
 0 --> falsy value
 ToBoolean(0) --> false
 !0 returns true
*/

console.log(!(-4));
/*
 -4 --> truthy value
 ToBoolean(-4) --> true
 ! (-4 ) returns false
*/

console.log(!{});
/*
 {} --> truthy value
 ToBoolean({}) --> true
 ! ({}) returns false
*/

console.log(!console.log(0)); // 0 and true
//because console.log() returns undefined and undefined is falsy value 
