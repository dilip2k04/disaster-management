const bcrypt = require('bcryptjs')

exports.hash = (p)=>bcrypt.hash(p,10)
exports.compare = bcrypt.compare
