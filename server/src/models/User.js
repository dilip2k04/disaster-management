const mongoose = require('mongoose')

module.exports = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,

  // ✅ simple text location
  location: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: ['admin','user'],
    default: 'user'
  }
},{ timestamps:true }))
