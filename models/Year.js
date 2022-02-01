const { Schema, model } = require('mongoose')

const Year = new Schema({
  name: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'},
  months: [
    {
      type: Schema.Types.ObjectId,
      ref: 'month'
    }],
},
  { timestamps: true })

module.exports = model('year', Year)

