
let arr=[1,2,3,4,5];

let newarr=arr.map(function process(v,i){   //map function returns a new array

    console.log(v,i);
    return v*v;      //returns the value in the new array 
});
console.log(arr);
console.log(newarr);