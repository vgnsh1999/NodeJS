const express = require('express');

const router = express.Router();

// /admin/add-product =>GET
router.get('/add-product',(req,res,next)=> {
    res.send('<form action="/admin/add-product" method="POST">Product Name:<input type = "text" name="title">Size:<input type = "text" name="size"><button type="submit">Add product</button></form>');
}); 

// /admin/add-product =>POST
router.post('/add-product',(req,res,next)=>{
    console.log(req.body); // we have to parse else we get undefined
    res.redirect('/');
});

module.exports = router;