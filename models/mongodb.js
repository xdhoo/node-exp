var mongoose = require('mongoose');
var settings = require('../settings');

var userModel;

//连接数据库
mongoose.connect('mongodb://' + settings.host + '/' + settings.db,
  function (err) {
    if (err) {
      console.log(err);
      throw err;
    }
  });

var users = new mongoose.Schema({
  name: string,
  password: string
});