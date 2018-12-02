const express = require("express");
const Main = require("../controllers/unauthController.js");
const wrapAsync = require("../common/util.js");
const validator = require("validator");

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

router.post("/email", wrapAsync(async (req, res) => {
    const currEmail = req.body.email;
    if (!validator.isEmail(currEmail)) {
        res.status(400).json({
            message: "Invalid email address.",
            action: "Email",
            description: `Email '${currEmail.toString()}' is not valid.`
        });
    } else {
        res.status(200).json({
            message: "Email received.",
            action: "Email",
            description: `Email '${currEmail}' Saved.`
        });
    }
}));



router.get("*", Main.notFound);

module.exports = router;