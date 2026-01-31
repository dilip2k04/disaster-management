const axios = require('axios')
const { WEATHER_KEY } = require('../config/env')

exports.getWeather = (lat,lng)=>{
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${WEATHER_KEY}`
  )
}
