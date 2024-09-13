console.log(a);
var a=10;
// Hoisting Behavior of var:
// When using var, the variable declaration is hoisted to the top of its scope, but the initialization is not.
console.log(b);
let b=20;
// Hoisting Behavior of let:
// Like var, let declarations are also hoisted, but they differ in that they remain in a temporal dead zone (TDZ) until the code execution reaches the actual declaration. This means that although the variable b is hoisted, it is not initialized and cannot be accessed until the line let b = 20; is encountered.
