var teacher="Sanket";
function fun(){
    var teacher="pulkit";
    teachingAssistant="Vibhav";
    console.log(teacher);
    console.log(teachingAssistant);
}
console.log(teachingAssistant);// This will throw error as this variable is not defined in the global scope
fun();
console.log(teacher);
