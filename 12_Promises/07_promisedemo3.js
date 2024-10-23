function fetch(url){
    return new Promise(function (resolve,reject){
        console.log("Going to start the download");
        setTimeout(function exec(){
            let data="Dummy data";
            console.log("Download completed");
            resolve(data);
        },10000);
        console.log("Timer to mimic the download started");
    })
}

console.log("Starting the program");
console.log("We are expecting to mimic a downloader");
x=fetch("www.google.com");
console.log("New Promise object created successfully, but download is still going on");