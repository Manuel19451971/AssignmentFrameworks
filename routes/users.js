/**
 *  @author Manuel Gonzalez
 *  assignment!
 *  @file user.js
 *  It has all the router for the server
 */

'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

router.get('/messi', function (req, res) {
    res.send('hola');
});


module.exports = router;
