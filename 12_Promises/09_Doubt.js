function fetchdata(url){
    return new Promise(function (resolve,reject){
        console.log("Started downloading from the", url);
        setTimeout(function exec(){
            let data="dummy data";
            console.log("Download completed");
            resolve(data);
            console.log("Hello");
            // resolve(1234);  these lines will never be executed as promise is fullfilled only once
        },4000);
    })
}
fetchdata("www.googgle.com");