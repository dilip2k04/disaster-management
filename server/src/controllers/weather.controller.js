const { getWeather } = require('../services/weather.service')

exports.weather = async (req,res)=>{
  const { lat,lng } = req.query
  const { data } = await getWeather(lat,lng)
  res.json(data)
}
