const { Schema, model } = require('mongoose')

const Category = new Schema({
  name: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  actualValue: Number,
  goalValue: {
    type: Number
  },
  result: Number,
  month: {
    type: Schema.Types.ObjectId,
    ref: 'month'
  }
}, { timestamps: true })

module.exports = model('category', Category)