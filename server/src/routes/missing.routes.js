const router = require("express").Router();
const multer = require("multer");
const auth = require("../middleware/auth.middleware");
const controller = require("../controllers/missing.controller");

const upload = multer({ dest: "uploads/" });

router.get("/", auth, controller.getAll);
router.post("/", auth, upload.single("image"), controller.create);
router.put("/:id", auth, controller.update);
router.delete("/:id", auth, controller.remove);

module.exports = router;
