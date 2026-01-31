const router = require("express").Router();
const controller = require("../controllers/place.controller");
const auth = require("../middleware/auth.middleware");

router.get("/", auth, controller.nearby);

module.exports = router;
