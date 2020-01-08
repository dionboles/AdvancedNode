// the https module usings the os async calls

const https = require("https");
const start = Date.now();
const crypto = require("crypto");
const fs = require("fs");

let doRequest = () =>{
    // this makes a request to googles home page
    https.request("https://www.google.com", res =>{
        res.on("data", () => {});
        res.on("end",()=>{
            console.log(Date.now() - start);
        })
    }).end();
};

let doHash = ()=>{
    crypto.pbkdf2("a",'b',100000,512,'sha512',()=>{
        console.log('Hash:',Date.now() - start);
    });
}

doRequest();
fs.readFile("multitask.js ",'utf8',()=>{
    console.log("FS:", Date.now() - start);
})
doHash();
doHash();
doHash();
doHash();

