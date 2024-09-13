"use strict"; //In strict mode auto globals does not work 
function fun(){
    a=10;
    console.log(a);
}
fun();

function abc(){
    ta="vibhav";
    console.log(ta);
}

function gun(){
    "use strict";
    teacher="sanket";
    console.log(teacher);

}
abc();
gun();