var express = require('express');
var router = express.Router();

var models = require('../models/mongodb')

/* GET users listing. */
router.get('/paging',function(req,res,next){
  models.user.find().exec((err,data)=>{
    res.send(data);
  })
});
router.post('',function(req,res,next){
  var obj = req.body;
  if(!obj._id){
    models.user.insertMany(obj,(err,result)=>{
      if(err){
        res.send('fail');
        return;
      }else{
        res.send('success');
      }
    })
  }else{
    models.user.findOneAndUpdate({_id:obj._id},obj,(err)=>{
      if(err){
        res.send('fail');
        return;
      }else{
        res.send('success');
      }
    })
  }
  
});
module.exports = router;
