console.log(12);
console.log(14);
console.log(true,null,13,"Sanket");

process.stdout.write("hello");//This will work only in Node js not in browser
process.stdout.write("world");//Prints helloworld in the same line ......

// The reason process.stdout.write("hello"); works in Node.js but not in the browser is due to the differences in the runtime environments of Node.js and browsers:

// process is a global object in Node.js that provides information and control over the current Node.js process.

// In browsers, there is no process object because browsers are designed to run JavaScript in a web page, not a local machine's terminal.


// ******Program and Process******
//  If we write code in a file that is called a program....
//  Program in a running state is called process.....





