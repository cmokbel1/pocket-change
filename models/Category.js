const { Schema, model } = require('mongoose')

const Category = new Schema({
  title: String,
  artist: String,
  album: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true })

module.exports = model('Category', Category)