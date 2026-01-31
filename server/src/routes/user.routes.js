const r = require('express').Router()
const c = require('../controllers/user.controller')
const auth = require('../middleware/auth.middleware')
const role = require('../middleware/role.middleware')

r.get('/', auth, role('admin'), c.getAll)
r.delete('/:id', auth, role('admin'), c.remove)
r.get("/locations", auth, role("admin"), c.getLocations)
    

module.exports = r
