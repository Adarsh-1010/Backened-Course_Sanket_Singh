function fun(){
    let name="harshit";
    function callback(){
        console.log(college);
        console.log(name);

    }
    return callback;
}

let x=fun();
x();
var college="iit delhi";
x();

// --> Now the question is if todo is completed it will be removed from callstack? How actually the variable persist ? where are they?

// Where Variables Persist (Closure):

// The variable name is not stored on the call stack. Instead, it's stored in the heap (the memory area for long-lived objects), and the closure created by callback holds a reference to it.
// This reference ensures that name persists as long as the callback function exists (i.e., as long as the reference to the closure is alive).
// When you assign let x = fun();, the callback function is stored in x, and the closure maintains a reference to the variable name, ensuring that it doesn't get garbage collected.