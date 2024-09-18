
function mapper(arr,fn){
    //fn --> this is callback function 
    //arr --> this is array element
    let result=[];
    for(let i=0;i<arr.length;i++){
        //i -->index 
        //v -->arr[i]
        
       let res= fn(arr[i],i);
       result.push(res);
    }
    return result;
}

let arr=[1,2,3,4,5];
 let x=mapper(arr,function cuber(v,i){
    console.log(v,i);
    return v*v*v;    //this return value will be catched by variable res
 });
 console.log(arr);
 console.log(x);