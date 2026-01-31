const mongoose = require('mongoose')

module.exports = mongoose.model('Alert', new mongoose.Schema({
  message: String,
  location: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref:'User' }
},{ timestamps:true }))
