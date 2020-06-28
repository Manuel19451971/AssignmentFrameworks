/**
 *  @author Manuel Gonzalez
 *  assignment!
 *  @file index.js
 *  It has all the router for the server
 */




/*This is for the routes of my pugfiles      */

'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'User' });
});

/* handle request to / and sends pug aboutme */
router.get('/AboutMe', function (req, res) {
    res.render('AboutMe', { title: 'AboutMe' });
});

/* handle request to / and sends pug Contactme */

router.get('/ContactMe', function (req, res) {
    res.render('ContactMe', { title: 'ContactMe' });
});


/* handle request to / and sends pug Projects */

router.get('/Projects', function (req, res) {
    res.render('Projects', { title: 'Projects' });
});


/* handle request to / and sends pug services */

router.get('/Services', function (req, res) {
    res.render('Services', { title: 'Services' });
});

module.exports = router;
