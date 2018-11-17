const express = require("express");
const Main = require("../controllers/unauthController.js");
const wrapAsync = require("../common/util.js");

const router = express.Router();

router.get("/", Main.index);
router.get("/category/:category", Main.findByCategory);

router.get("/me", wrapAsync(async (req, res) => {
    console.log(req.cookies);
    res.status(200).cookie("PRODUCTHUNT", "Unleasethehounds", {
        httpOnly: true
    }).json({
        message: "hi, this is the 'me' route."
    });
}));



router.get("*", Main.notFound);

module.exports = router;