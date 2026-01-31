const router = require('express').Router();

router.use('/auth', require('./auth.routes'));
router.use('/users', require('./user.routes'));
router.use('/alerts', require('./alert.routes'));
router.use('/weather', require('./weather.routes'));
router.use('/places', require('./place.routes'));
router.use("/todos", require("./todo.routes"));
router.use("/missing", require("./missing.routes"));


module.exports = router;
