// 'use strict';
var express = require('express');
var router = express.Router();
const yelp = require('yelp-fusion');
const client= yelp.client(process.env.API_KEY_YELP);


router.post('/search', function(req, res, next) {

});

module.exports = router;
