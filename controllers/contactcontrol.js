const path = require('path');

const rootDir = require('../util/path');

exports.getContact =  (req,res,next)=> {
    //res.sendFile(path.join(__dirname,'../','views','contact.html')); //with /
    //res.sendFile(path.join(__dirname,'..','views','contact.html')); //without /
    res.sendFile(path.join(rootDir,'views','contact.html')); //adding rootDir
};

exports.postContact = (req,res,next)=>{
    console.log(req.body); // we have to parse else we get undefined
    res.redirect('/success');
};