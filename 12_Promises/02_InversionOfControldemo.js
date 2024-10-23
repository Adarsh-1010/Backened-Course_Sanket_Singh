function fun(str,fn){
    let output=str.split(',');//output is an array
    for(let i=0;i<output.length;i++){
        fn(output[i]);
        // fn(output[i]);
        // fn(output[i]);  we need only one time it should be executed but it has executed 3 times so we dont have control on this function fun which is called inversion of control 

    }
}
fun("name:sanket,subject:cse",function process(ip){
    let arr=ip.split(':');
    console.log(`{${arr[0]} => ${arr[1]}}`);
});

// --> Inversion Of Control: If there is some part of the code whose control we are passing to someone  else and we dont know how that part will be executed .....This is called inversion of control....



//In JavaScript, this can be demonstrated by passing a function (callback) as an argument to another function, allowing the called function to control when and how the callback is executed.
//fun is a higher-order function that takes two arguments:
// str: A string input that is split into an array of substrings.
// fn: A function (callback) passed as an argument, which will be applied to each element of the output array.
// The main task of fun is to split the input string (str) by commas, create an array (output), and then iterate through it. For each element in the array, it invokes the fn function and passes the current element to it.
//Here, process is the callback function passed into fun. The function splits each element (ip) of the output array into key-value pairs (splitting at :) and logs the output in a custom format.
// Inversion of Control (IoC):
// The key aspect of IoC in this example is that fun does not know or control what exactly the callback (process) does. Instead, it just ensures that the function fn (callback) is called with each element of the array. The control of the processing logic (how each element is processed and displayed) is inverted, meaning that the caller (i.e., the code that calls fun) provides the process logic, while the fun function just controls when and how many times the callback is executed.

//Important Note:=> To solve the problem of IOC concept of promise came up.....

























