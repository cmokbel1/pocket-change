const { Schema, model } = require('mongoose')

const Category = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true })

module.exports = model('Category', Category)