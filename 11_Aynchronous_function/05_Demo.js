function process(){
    console.log("start");
  
    setTimeout(function exec(){
        console.log("Executed task 1");
    },5000);

    setTimeout(function exec(){
        console.log("Executed task 2");
    },3000);
    for(var i=1;i<1000000000;i++){

    }
    
    console.log("end");
}
process();
console.log("Tata");