const express = require("express");
const path = require("path");
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

router.get("/download", wrapAsync(async (req, res) => {
    const file = "advertorial.pdf";
    res.download(file, "advertorialsave.pdf");
    //res.attachment("advertorial.pdf");
    //res.sendFile(path.join(__dirname, "../advertorial.pdf"));
}));

router.get("/news", wrapAsync(async (req, res) => {
    res.status(200).json({
        action: "/news",
        message: "success.",
        data: [{
            headline: "Windows is going open source (fiction).",
            subheader: "It has finally happened.",
            link: "https://github.com"
        }, {
            headline: "Aliens have been discovered (fiction).",
            subheader: "They're silicon based lifeforms",
            link: "https://github.com"
        }, {
            headline: "Faster than light travel is now possible (fiction).",
            subheader: "It'll be cost-effective in 2321.",
            link: "https://github.com"
        }]
    });
}));

router.get("/links", wrapAsync(async (req, res) => {
    res.status(200).json({
        action: "/links",
        message: "success.",
        data: [{
            headline: "NodeJS Crypto",
            subheader: "Crypto for Node.js v11.3.0 Documentation",
            link: "https://nodejs.org/api/crypto.html"
        }, {
            headline: "Understanding JavaScript Bind ()",
            subheader: "Function binding is probably your least concern when beginning with JavaScript, but when you realize that you need a solution to the problem of how to keep the context of “this” within another function, then you might not realize that what you actually need is Function.prototype.bind().",
            link: "https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/"
        }, {
            headline: "NodeJS Streams",
            subheader: "Streams for Node.js v11.3.0 Documentation",
            link: "https://nodejs.org/api/stream.html"
        }]
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