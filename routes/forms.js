/**
 *  @author Manuel Gonzalez
 *  assignment!
 *  @file forms.js
 *  try to post the information on the form to the server, but it doesnt work.
 *  
 */




var express = require('express');
var router = express.Router();

router.post('/contact', function (req, res) {
    console.log('contact-form', req);
    res.sendStatus(200);
});

module.exports = router;
