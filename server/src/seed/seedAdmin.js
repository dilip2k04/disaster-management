const { User } = require('../models')
const { hash } = require('../utils/hash')

module.exports = async ()=>{
 const exists = await User.findOne({role:'admin'})
 if(exists) return

 await User.create({
  name:'Admin',
  email:'admin@gmail.com',
  phone:'0000000000',
  password: await hash('admin123'),
  role:'admin'
 })
 console.log('✅ Admin created')
}
