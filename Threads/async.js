// the https module usings the os async calls

const https = require("https");
const start = Date.now();

let doRequest = () =>{
    // this makes a request to googles home page
    https.request("https://www.google.com", res =>{
        res.on("data", () => {});
        res.on("end",()=>{
            console.log(Date.now() - start);
        })
    }).end();
};


doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();