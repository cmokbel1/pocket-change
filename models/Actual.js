const { Schema, model } = require('mongoose')

const Actual = new Schema({
  amount: String,
  artist: String,
  album: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true })

module.exports = model('Actual', Actual)