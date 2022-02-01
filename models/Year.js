const { Schema, model } = require('mongoose')

const Year = new Schema({
  name: String,
  months: [
    {
      type: Schema.Types.ObjectId,
      ref: 'month'
    }],
},
  { timestamps: true })

module.exports = model('year', Year)

