const router = require('express').Router();
const controller = require('../controllers/alert.controller');

/* SEND */
router.post('/', controller.sendAlert);

/* ⭐ NEW → ALL alerts */
router.get('/', controller.getAllAlerts);

/* ⭐ LOCATION ONLY */
router.get('/location', controller.getAlertsByLocation);

module.exports = router;
