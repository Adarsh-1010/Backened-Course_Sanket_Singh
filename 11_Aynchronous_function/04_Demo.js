function process(){
    console.log("start");
    setTimeout(function exec(){
        console.log("Executed task");
    },0);
    for(var i=1;i<1000000000;i++){

    }
    console.log("end");
}
process();  
console.log("Tata");