//create server
// const http = require('http');

// const server = http.createServer((req,res)=>{
//     console.log(req)
// });

// server.listen(3000);

//sharpener task
/*
Create a server , run it on port 4000 and console log your name.
Call the server from the browser and your name would get printed. 
*/

const http = require('http');

const server = http.createServer((req,res)=>{
    req = 'Vignesh Varadhan K';
    console.log(req);
});

server.listen(4000);