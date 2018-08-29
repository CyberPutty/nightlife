var express = require('express');
var router = express.Router();
const models= require('../models');

const Comments= models.Comments;



/* GET users listing. */
// /comments

router.post('/',function(req,res){
console.log(req.body);
res.send('ok');
});


router.get('/', function(req, res, next) {

  res.json("server now connected via proxy");
});

module.exports = router;
