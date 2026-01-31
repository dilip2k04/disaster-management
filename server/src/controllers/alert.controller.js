const { User, Alert } = require('../models');
const { sendSMS } = require('../services/sms.service');
const { makeCall } = require('../services/voice.service');
const { sendMail } = require('../services/mail.service');


/* =========================================
   SEND ALERT (LOCATION OR ALL USERS)
========================================= */
const sendAlert = async (req, res) => {
  try {
    console.log("\n========== ALERT START ==========");

    const { message, location, sendAll } = req.body;

    console.log("BODY:", req.body);

    let users = [];

    /* ⭐ NEW LOGIC */
    if (sendAll) {
      // ✅ send to everyone
      console.log("🌍 Sending to ALL users");
      users = await User.find({});
    } else {
      // ✅ send only selected location
      console.log("📍 Sending to location:", location);

      users = await User.find({
        location: { $regex: new RegExp(`^${location}$`, "i") }
      });
    }

    console.log("Users found:", users.length);

    const tasks = [];

    for (const u of users) {
      console.log("Processing:", u.name);

      if (u.phone) {
        tasks.push(sendSMS(u.phone, message));
        tasks.push(makeCall(u.phone, message));
      }

      if (u.email) {
        tasks.push(sendMail(u.email, message));
      }
    }

    await Promise.allSettled(tasks);

    await Alert.create({
      message,
      location: sendAll ? "ALL" : location
    });

    console.log("========== ALERT END ==========\n");

    res.json({
      msg: "Alert sent successfully",
      count: users.length
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};


/* =========================================
   GET ALL ALERTS (Admin + Alerts Tab)
========================================= */
const getAllAlerts = async (req, res) => {
  try {
    const alerts = await Alert
      .find()
      .sort({ createdAt: -1 });

    res.json(alerts);
  } catch {
    res.status(500).json({ msg: "Failed to fetch alerts" });
  }
};


/* =========================================
   GET ALERTS BY LOCATION (Overview only)
========================================= */
const getAlertsByLocation = async (req, res) => {
  try {
    const { location } = req.query;

    const alerts = await Alert
      .find({
        $or: [
          { location: location.toLowerCase() },
          { location: "ALL" } // include global alerts
        ]
      })
      .sort({ createdAt: -1 });

    res.json(alerts);
  } catch {
    res.status(500).json({ msg: "Failed to fetch alerts" });
  }
};


module.exports = {
  sendAlert,
  getAlertsByLocation,
  getAllAlerts // ⭐ export new
};
