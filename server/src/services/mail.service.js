const transporter = require('../config/mail')

exports.sendMail = (to,msg)=>{
  return transporter.sendMail({
    to,
    subject:'🚨 Disaster Alert',
    text: msg
  })
}
