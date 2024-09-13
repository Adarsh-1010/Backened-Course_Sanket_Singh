//While loops:
let i=0;
while(i<10){
    console.log(i);
    i++;
}

//For loops:
for(let i=0;i<10;i++){
    console.log(i);
}

//Break:
// we come out from the nearest loop....

for(let i=1;i<10;i++){
    if(i%7==0){
        console.log("Breaking now");
        break;
    }
    console.log(i);
}
// Que:Examples of break statement....

for(let i=0;i<5;i++){
    let str="";
    for(let j=0;true;j++){
        str+="*";
        if(j==i){
            break;
        }
    }
    console.log(str);
}

//Continue Statement:
for(let i=0;i<10;i++){
    if(i%3==0){
        continue;     //This takes you back to the nearest loop
    }
    console.log(i);
}







