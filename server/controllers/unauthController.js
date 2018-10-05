const wrapAsync = require("../common/util.js");

exports.index = wrapAsync(async (req, res) => {
    res.status(200).json({
        route: "/",
        message: "Welcome to my product service.",
        routes: "Routes available are /"
    });
})

exports.notFound = wrapAsync(async (req, res, next) => {
    res.status(404).json({
        route: "/notfound",
        message: "This route doesn't exist"
    });
});