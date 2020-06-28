'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'User' });
});


router.get('/AboutMe', function (req, res) {
    res.render('AboutMe', { title: 'AboutMe' });
});

router.get('/ContactMe', function (req, res) {
    res.render('ContactMe', { title: 'ContactMe' });
});


router.get('/Projects', function (req, res) {
    res.render('Projects', { title: 'Projects' });
});


router.get('/Services', function (req, res) {
    res.render('Services', { title: 'Services' });
});

module.exports = router;
