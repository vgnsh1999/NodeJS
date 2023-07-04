//creating path

const express = require('express');

//removing rootDir and adding controller
//const rootDir = require('../util/path');
const contactController = require('../controllers/contactcontrol');

const router = express.Router();

router.get('/',contactController.getContact);

router.post('/',contactController.postContact);

module.exports = router;