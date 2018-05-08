var express = require('express');
var router = express.Router();
var models = require('../models/mongodb');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/user', function (req, res, next) {
  models.user.find((err, data) => {
    res.send(data);
    console.log(data)
  })
});

module.exports = router;
