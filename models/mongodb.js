var mongoose = require('mongoose');
var settings = require('../setting');

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
  id: Number,
  name: String,
  password: String
});
userModel = mongoose.model('user', users);
module.exports = { 'user': userModel };