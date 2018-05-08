var express = require('express');
var router = express.Router();

var models = require('../models/mongodb')

/* GET users listing. */
debugger;
router.get('/user',function(req,res,next){
  models.user.find().exec((err,data)=>{
    res.send(data);
  })
});
module.exports = router;
