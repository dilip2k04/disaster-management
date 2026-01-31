const { User } = require('../models')

exports.getAll = async (_,res)=>{
  res.json(await User.find())
}

exports.remove = async (req,res)=>{
  await User.findByIdAndDelete(req.params.id)
  res.json({msg:'Deleted'})
}

// get unique locations
exports.getLocations = async (req,res)=>{
  const locations = await User.distinct("location")
  res.json(locations)
}
