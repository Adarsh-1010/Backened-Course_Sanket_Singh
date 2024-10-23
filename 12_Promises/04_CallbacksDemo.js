// Task 1: Write a function to download the data from URL
// Task 2: Write a function to save that downloaded data in a file and return the file name 
// Task 3: Write a function to upload the file written in previous step to a new URL....

function fetchCustom(url,fn){ // We are just mimicing the function... 
    //download the content of the url
    //this downloading can take sometime
    //we will download the content of the url and whatever is the result we will pass the result to the callback.....

    console.log("Download started");
    setTimeout(function process(){
        console.log("Download completed");
        let response= "Dummy Data"; 
        fn(response);
        
    },3000);
}

function writefile(data,fn){
    console.log("Writing Started");
    setTimeout(function process(){
        console.log("Writing Completed");
        let filename="Output.txt";
        fn(filename);
        
    },4000)
}

function uploadFile(filename,newurl,fn){
    console.log("Upload Started");
    setTimeout(function process(){
        console.log("File",filename,"Uploaded successfully on",newurl);
        let uploadresponse="SUCCESS";
        fn(uploadresponse);
       
    },5000);
}
 
fetchCustom("www.google.com",function download(response){
    console.log("Downloaded data is",response);
    writefile(response,function writeCallBack(filenameResponse){
        console.log("New File Written is",filenameResponse);
        uploadFile(filenameResponse,"www.drive.com",function uploaded(uploadedresponse){
            console.log("Successfully Uploaded",uploadedresponse);
        })
    });
});


//The above code is the example of callback hell.....
// To handle the case of callback hell we use promises..... 



