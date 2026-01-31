const r = require('express').Router()
const c = require('../controllers/weather.controller')

r.get('/', c.weather)

module.exports = r
