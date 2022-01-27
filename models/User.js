const { Schema, model } = require('mongoose')

const User = new Schema({
  username: String,
  email: String
})

User.plugin(require('passport-local-mongoose'));

module.exports = model('User', User)


