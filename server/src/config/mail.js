const nodemailer = require('nodemailer')
const { EMAIL, EMAIL_PASS } = require('./env')

module.exports = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: EMAIL_PASS
  }
})
