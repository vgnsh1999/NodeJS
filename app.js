//create server
// const http = require('http');

// const server = http.createServer((req,res)=>{
    //console.log(req) // req is an object
    //console.log(req.url,req.method,req.headers);
    //response
    // res.setHeader('Content-Type','text/html'); // Conent-Type is a common attribute in headers where we are going to insert html file
    // res.write('<html>'); // write() will help us to insert html code
    // res.write('<head><title>My First Page</title></head>');
    // res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    // res.write('</html>');
    // res.end(); // it is mandatory to end and if we try to write() after end() it will throw error
//     const url = req.url;
//     if(url === '/home'){
//        res.write('<html>'); 
//        res.write('<head><title>My First Page</title></head>');
//        res.write('<body><h1>Welcome home</h1></body>')
//        res.write('</html>');
//        return res.end(); //if we dont'return res.end() it will throw error as we already
//                          // said after res.end() we should not have any res.write() statement 
//     } else if (url === '/about'){
//         res.write('<html>'); 
//         res.write('<head><title>My First Page</title></head>');
//         res.write('<body><h1>Welcome to About Us page</h1></body>')
//         res.write('</html>');
//         return res.end(); 
//     } else if (url === '/node'){
//         res.write('<html>'); 
//         res.write('<head><title>My First Page</title></head>');
//         res.write('<body><h1>Welcome to my Node Js project</h1></body>')
//         res.write('</html>');
//         return res.end(); 
//     }
// });

// server.listen(3000);

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

//9th video code
// const http = require('http');

// const server = http.createServer((req,res)=>{
//     const url = req.url;
//     if(url === '/'){
//         res.write('<html>');
//         res.write('<head><title>Enter Message</title></head>');
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
//         res.write('</html>');
//         return res.end();
//     }
//     res.setHeader('Content-Type','text/html'); 
//     res.write('<html>'); 
//     res.write('<head><title>My First Page</title></head>');
//     res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
//     res.write('</html>');
//     res.end();
    
// });

//server.listen(3000);

//Clean Up code

//1.
// const http = require('http');

// const routes = require('./routes');

// const server = http.createServer(routes);

// server.listen(3000);

//2.
// const http = require('http');

// const routes = require('./routes');

// console.log(routes.someText);

// const server = http.createServer(routes.handler);

// server.listen(3000);

// //Express JS
// //deleted routes.js
// // use command npm install --save express
// //import express
// const express = require('express');

// //create express application

// const app = express();

// //Middleware
// //after creating app object and before creating server we add middleware
// app.use((req,res,next)=> {
//     console.log('I am inside middleware');
//     next(); //allows the request to continue to the next middleware in line 
// }); //the function inside will be used throughout the program
// //next is a function which is used by express to connect with req of other function

// app.use((req,res,next)=> {
//     console.log('I am inside another middleware');
//     //...here we will send response
//     //we can still use res.write res.setHeader but express uses res.send
//     res.send('<h1>Hello from Express.js!</h1>');
// }); 

// //the below two lines can be replaced with a single code
// // const server = http.createServer(app);
// // server.listen(3000);
// app.listen(3000);

//From video 11 to 13
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// const adminRouters = require('./routes/admin');
// const shopRouters = require('./routes/shop');

// //parsingbody use npm install --save body-parser
// app.use(bodyParser.urlencoded({extended:false}));

// app.use('/admin',adminRouters);

// app.use('/shop',shopRouters);

// app.use((req,res,next)=>{
//     res.status(404).send('<h1>Page not found</h1>');
// })

// app.listen(3000);

//From 14 to 22
//adding path module
// const path = require('path');

// const express = require('express');

// const bodyParser = require('body-parser');

// const app = express();

// const adminRouters = require('./routes/admin');
// const shopRouters = require('./routes/shop');
// const contactRouters = require('./routes/contact');

// //parsingbody use npm install --save body-parser
// app.use(bodyParser.urlencoded({extended:false}));

// //to import statically express js provides a feature
// app.use(express.static(path.join(__dirname,'public')));

// app.use('/admin',adminRouters);

// app.use('/shop',shopRouters);

// app.use('/contactus',contactRouters);

// app.use('/success',(req,res,next)=>{
//     res.sendFile(path.join(__dirname,'views','success.html'))
// });

// app.use((req,res,next)=>{
//     res.status(404).sendFile(path.join(__dirname,'views','404.html'))
// });

// app.listen(3000);

//--------------------------------------------//

// Adding controllers for /contactus and /success
const path = require('path');

const express = require('express');

//adding controllers
const successController = require('../Node JS/controllers/successcontrol');

const bodyParser = require('body-parser');

const app = express();

const adminRouters = require('./routes/admin');
const shopRouters = require('./routes/shop');
const contactRouters = require('./routes/contact');

//parsingbody use npm install --save body-parser
app.use(bodyParser.urlencoded({extended:false}));

//to import statically express js provides a feature
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRouters);

app.use('/shop',shopRouters);

app.use('/contactus',contactRouters);

app.use('/success',successController.getSuccess);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
});

app.listen(3000);
