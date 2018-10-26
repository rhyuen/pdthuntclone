const express = require("express");
const Main = require("../controllers/unauthController.js");

const router = express.Router();

router.get("/", Main.index);
router.get("/category/:category", Main.findByCategory);

router.get("*", Main.notFound);

module.exports = router;