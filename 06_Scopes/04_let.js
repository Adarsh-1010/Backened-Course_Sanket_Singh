
//let: Whenever we initialize the variable using let it always gets the scope of enclosing block......
// And if declare a variable using let outside any block then it will not get complete global scope...
// if we declare a variable using let it will only be accessible after declaration of it....
{
    let x=10;
    console.log(x);
}
// console.log(x); //x is not accessible outside the block ...

function abc(){
    var y=28;
    console.log(y); //In this case variable y gets the function scoped and is accessible inside whole function 
}
function fun(){
    console.log(y);//Here it will throw error beacuse whenever we declare let it will only acccesible after declaration.....
    let y=20;
    console.log(y); //In this case variable y gets the block scoped 
}

// Note: Const behaviour is same as let .....but the only difference is that reassignment cannot be done in case of const .....

