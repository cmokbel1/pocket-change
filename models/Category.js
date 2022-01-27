const { Schema, model } = require('mongoose')

const Category = new Schema({
  title: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  actual: {
    type: Schema.Types.ObjectId,
    ref: 'Actual'
  },
  goal: {
    type: Schema.Types.ObjectId,
    ref: 'Goal'
  }
}, { timestamps: true })

module.exports = model('Category', Category)