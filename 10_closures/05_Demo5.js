function fun(task1,task2){
    setTimeout(function exec(){
        console.log("completed",task1);   
    },2000);
    task1=task2;
    task2="assign";
}
fun("12","34");
//HINT--> Just do scope resolution i.e. parsing and execution part......