//Undeclared vs undefined
//Undefined is a variable state when the scopes already know about it  but in the execution phase we have not allocated a value
//Undeclared is a variable state when we never formally declared a variable and before assigning it a value so that it has chance to become autoglobals, we try to use it....

// Summary of Differences:
// Aspect	Undefined	                                   Undeclared
// Declared	Yes	                                             No
// Value	undefined	                              Variable doesn't exist (no value)
// Error	No error 	                              Throws ReferenceError
// Example	var x; console.log(x);undefined   	        console.log(y); // ReferenceError

var teacher="sanket";
function fun(){
    var teacher="pulkit";
    console.log(teacher,teachingAssistant);   //teachingAssistant is undeclared
    teachingAssistant="vibhav";
}

function gun(){
    console.log(subject);  //Here subject is undefined
    var subject="js";
    console.log(teacher);
}
console.log(teacher);
fun();
gun();