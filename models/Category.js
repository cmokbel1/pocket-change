const { Schema, model } = require('mongoose')

const Category = new Schema({
  category: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  actual: {
    type: Number
  },
  goal: {
    type: Number
  }
}, { timestamps: true })

module.exports = model('category', Category)