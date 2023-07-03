//creating path
const path = require('path');

const express = require('express');

//adding rootDir
const rootDir = require('../util/path');

const router = express.Router();

router.get('/',(req,res,next)=> {
    //res.sendFile(path.join(__dirname,'../','views','shop.html')); //with /
    //res.sendFile(path.join(__dirname,'..','views','shop.html')); //without /
    res.sendFile(path.join(rootDir,'views','shop.html')); //adding rootDir
});

module.exports = router;