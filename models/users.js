var db = require('./mongodb');

function User(user) {
    this.name = user.name;
    this.password = user.password;
};

module.exports = User;

