let a=5;
if(a){       //since 5 is a truthy value then inside if(condition) conditon is true 
    console.log("Hii");   //Hii will be printed
}

if(a==true){     //here it is abstract equality so true will be converted to a number 1 and 5 == 1-->returns false
    console.log("Hello");   //Hello will not be printed 
}
