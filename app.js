//create server
const http = require('http');

const server = http.createServer((req,res)=>{
    //console.log(req) // req is an object
    //console.log(req.url,req.method,req.headers);
    //response
    // res.setHeader('Content-Type','text/html'); // Conent-Type is a common attribute in headers where we are going to insert html file
    // res.write('<html>'); // write() will help us to insert html code
    // res.write('<head><title>My First Page</title></head>');
    // res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    // res.write('</html>');
    // res.end(); // it is mandatory to end and if we try to write() after end() it will throw error
    const url = req.url;
    if(url === '/home'){
       res.write('<html>'); 
       res.write('<head><title>My First Page</title></head>');
       res.write('<body><h1>Welcome home</h1></body>')
       res.write('</html>');
       return res.end(); 
    } else if (url === '/about'){
        res.write('<html>'); 
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('</html>');
        return res.end(); 
    } else if (url === '/node'){
        res.write('<html>'); 
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>')
        res.write('</html>');
        return res.end(); 
    }
});

server.listen(3000);

//sharpener task
/*
Create a server , run it on port 4000 and console log your name.
Call the server from the browser and your name would get printed. 
*/

// const http = require('http');

// const server = http.createServer((req,res)=>{
//     req = 'Vignesh Varadhan K';
//     console.log(req);
// });

// server.listen(4000);