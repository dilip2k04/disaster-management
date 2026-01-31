const client = require('../config/twilio');
const { TWILIO_PHONE } = require('../config/env');

exports.makeCall = async (to, msg) => {
  console.log("\n📞 CALL DEBUG →", to);

  try {
    const call = await client.calls.create({
      from: TWILIO_PHONE,
      to,
      twiml: `<Response><Say>${msg}</Say></Response>`
    });

    console.log("✅ CALL SID:", call.sid);
    return call;

  } catch (err) {
    console.log("❌ CALL ERROR:", err.message);
  }
};
