function process(){
    console.log("Start");
    for(var i=0;i<3;i++){
        setTimeout(function exec(){
            console.log("task completed");
        },3000);
        console.log("inside for loop");
    }
    for(var j=1;j<1000000;j++){

    }
    console.log("end");
}
process();