const { verify } = require('../utils/token')

module.exports = (req,res,next)=>{
  const token = req.headers.authorization
  if(!token) return res.status(401).json({msg:'No token'})

  req.user = verify(token)
  next()
}
