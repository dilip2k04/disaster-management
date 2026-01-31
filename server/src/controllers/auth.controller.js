const { User } = require('../models')
const { hash, compare } = require('../utils/hash')
const { sign } = require('../utils/token')

exports.register = async (req,res)=>{
  const body = req.body
  body.password = await hash(body.password)

  const user = await User.create(body)
  res.json(user)
}

exports.login = async (req,res)=>{
  const { email,password } = req.body

  const user = await User.findOne({email})

  if(!user || !(await compare(password,user.password)))
    return res.status(400).json({msg:'Invalid credentials'})

  const token = sign({
    id:user._id,
    role:user.role
  })

  // ⭐ THIS IS THE FIX
  res.json({
    token,
    role: user.role
  })
}

