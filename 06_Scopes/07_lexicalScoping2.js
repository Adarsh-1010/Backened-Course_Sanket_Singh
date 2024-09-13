
var teacher="Sanket";
function fun(){
    var teacher="pulkit";
    teachingAssistant="Vibhav";
    console.log(teacher);
    console.log(teachingAssistant);
}
fun();
console.log(teacher);
console.log(teachingAssistant); //Autoglobals

//Once inside any scope, we don't know about scope of a variable we check the outer scope one by one.....
//There can be two cases if it is declared outside or if it not declared outside......

//Autoglobals:In js if we keep on searching scope of a variable in outer scopes and no where find it...we automatically consider it in global scope...... This happens during execution phase