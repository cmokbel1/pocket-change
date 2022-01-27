const { Schema, model } = require('mongoose')

const Actual = new Schema({
  amount: {
    type: Schema.Types.Decimal128
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
}, { timestamps: true })

module.exports = model('Actual', Actual)