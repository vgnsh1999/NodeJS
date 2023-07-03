//adding path
const path = require('path');

const express = require('express');

//adding own path using util folder
const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product =>GET
router.get('/add-product',(req,res,next)=> {
    //res.sendFile(path.join(__dirname,'../','views','add-product.html')); //with /
    //res.sendFile(path.join(__dirname,'..','views','add-product.html')); // without /
    res.sendFile(path.join(rootDir,'views','add-product.html')); // using rootDir
}); 

// /admin/add-product =>POST
router.post('/add-product',(req,res,next)=>{
    console.log(req.body); // we have to parse else we get undefined
    res.redirect('/success');
});

module.exports = router;