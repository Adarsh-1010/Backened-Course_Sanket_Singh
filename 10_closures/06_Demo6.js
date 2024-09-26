function test(){
    for(var i=0;i<3;i++){
        setTimeout(function exec(){
            console.log(`i:${i}`);
        },i*1000);
    }
}
test();

// Points to Remember: In the above example var i gets the function scope not the block and if we replace var i with let i it always gets the block scope