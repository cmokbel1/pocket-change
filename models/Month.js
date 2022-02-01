const { Schema, model } = require('mongoose')

const Month = new Schema({
  month: String {
  category: String {
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  actual: {
    type: Integer
  },
  goal: {
    type: Integer
  },
  difference: {
    type: Integer
  }
}}
}, { timestamps: true })

module.exports = model('Category', Category)



month: {
  category: String,
    actual: Integer,
      goal: Integer,
        result: Integer
},