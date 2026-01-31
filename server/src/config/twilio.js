const twilio = require('twilio')
const { TWILIO_SID, TWILIO_TOKEN } = require('./env')

module.exports = twilio(TWILIO_SID, TWILIO_TOKEN)
