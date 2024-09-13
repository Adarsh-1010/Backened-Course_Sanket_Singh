//Block Scope:
// In javascript we can use pair of curly braces to declare a block .....
{
    //This is a block
}
// Now if a variable or function is only accessible/visible inside a block then it is having block scope.....
// Blocks can be if else block, while block ,for block, raw block

{
    let x=10;
    console.log(x);
}
// console.log(x); X cannot be accessed outside the block because it is having block scope

