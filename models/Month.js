const { Schema, model } = require('mongoose')

const Month = new Schema({
  name: String,
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'category'
    }],
},
  { timestamps: true })

module.exports = model('month', Month)