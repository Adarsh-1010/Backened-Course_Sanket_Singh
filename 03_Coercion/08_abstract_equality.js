console.log(undefined == null)//true
console.log(null == undefined)//true

// If x is null and y is undefined, return true.
// If x is undefined and y is null, return true.

// If x is a Number and y is a String, then call ToNumber(y)
console.log(10 == "10");// ToNumber("10") --> 10 and 10 == 10  returns true
console.log(10 == "12");// ToNumber("12") --> 12 and 10 == 12  returns false

// If x is a string and y is a Number, then call ToNumber(x)
console.log("99" == 99);//  ToNumber("99") --> 99 and 99 == 99  returns true

// If x is a boolean return the result ToNumber(x) == y
console.log(true == 1);//ToNumber(true) --> 1 and 1 == 1  returns true
console.log(false == 10)// ToNumber(false) --> 0 and 0 == 10  returns false

// If x is either a String, a Number, a BigInt, or a Symbol and y is an Object, call ToPrimitive(y).
console.log(10 == {a:10,valueOf(){return 10}}); //ToPrimitve({a:10,valueOf(){return 10}})with hint by default= number -->10  10 == 10 --> true

// If x is an Object and y is either a String, a Number, a BigInt, or a Symbol, call ToPrimitive(x).

//Note: If none of the above condition occurs return false

