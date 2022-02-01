const { Schema, model } = require('mongoose')

const Month = new Schema({
  name: String,
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'category'
    }],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
}, { timestamps: true })

module.exports = model('month', Month)