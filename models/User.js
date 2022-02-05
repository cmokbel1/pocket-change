const { Schema, model } = require('mongoose')

const User = new Schema({
  username: String,
  email: String,
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'category'
    }],
  months: [{
    type:Schema.Types.ObjectId,
    ref: 'month'
  }]
}, { timestamps: true })
User.plugin(require('passport-local-mongoose'));

module.exports = model('User', User)


