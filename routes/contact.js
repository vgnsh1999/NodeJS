//creating path
const path = require('path');

const express = require('express');

//adding rootDir
const rootDir = require('../util/path');

const router = express.Router();

router.get('/',(req,res,next)=> {
    //res.sendFile(path.join(__dirname,'../','views','contact.html')); //with /
    //res.sendFile(path.join(__dirname,'..','views','contact.html')); //without /
    res.sendFile(path.join(rootDir,'views','contact.html')); //adding rootDir
});

router.post('/',(req,res,next)=>{
    console.log(req.body); // we have to parse else we get undefined
    res.redirect('/success');
});

module.exports = router;