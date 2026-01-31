const client = require('../config/twilio');
const { TWILIO_PHONE } = require('../config/env');

exports.sendSMS = async (to, msg) => {
  console.log("📩 SMS →", to);

  return client.messages.create({
    body: msg,
    from: TWILIO_PHONE,
    to
  });
};
