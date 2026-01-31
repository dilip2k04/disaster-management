const router = require("express").Router();
const controller = require("../controllers/todo.controller");
const auth = require("../middleware/auth.middleware");

router.use(auth);

router.post("/", controller.create);
router.get("/", controller.getMine);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;
