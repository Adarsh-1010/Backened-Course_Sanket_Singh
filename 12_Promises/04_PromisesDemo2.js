//How promises work behind the scene?
//The promise object we create has 4 major properties 
//1: status/state
//2: value
//3: on fullfillment
//4: on reject

// --> status/state:

//--> Status shows current promise status or state 
//1: Pending state 
//2: fullfilled state  --> It gives us the notion of success
//3: rejected state   --> It gives us the notion of error 

// --> Value: 

//-->When the status of the promise is pending this value property is undefined ...
//--> The moment promise is resolved i.e. status is fullfilled the value property is updated from undefined to the new value ...This value can be considered as the return value or resolved value ...
//--> So the value property acts like a placeholder till the time promise finishes

//-->Onfulfillment:

//--> This is an array which contains functions that we attach to our promise object....
// --> To a promise object we can attach some functions using .then() method .... 
//--> When the value property is updated from undefined , to the new value , js gives chance to these attached functions one by one with the value property as their arguments (if there is no piece of code in the call stack and global code left).....

