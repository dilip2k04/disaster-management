const { getNearbyPlaces } = require('../services/places.service')

exports.nearby = async (req,res)=>{
  const { lat,lng } = req.query
  const places = await getNearbyPlaces(lat,lng)
  res.json(places)
}
