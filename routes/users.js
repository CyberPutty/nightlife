var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json("server now connected via proxy");
});

module.exports = router;
