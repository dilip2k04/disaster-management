require('dotenv').config()

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,

  TWILIO_SID: process.env.TWILIO_SID,
  TWILIO_TOKEN: process.env.TWILIO_TOKEN,
  TWILIO_PHONE: process.env.TWILIO_PHONE,

  EMAIL: process.env.EMAIL,
  EMAIL_PASS: process.env.EMAIL_PASS,

  WEATHER_KEY: process.env.WEATHER_KEY,
  GOOGLE_KEY: process.env.GOOGLE_KEY
}
