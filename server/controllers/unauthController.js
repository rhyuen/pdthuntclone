const wrapAsync = require("../common/util.js");
const Product = require("../models/product.js");

exports.index = wrapAsync(async (req, res) => {
    res.status(200).json({
        route: "/",
        message: "Welcome to my product service.",
        routes: "Routes available are /"
    });
})

exports.findByCategory = wrapAsync(async (req, res) => {
    const category = req.params.category;
    const result = await Product.find({
        category: category
    });

    res.status(200).json({
        result
    });
});

exports.notFound = wrapAsync(async (req, res, next) => {
    res.status(404).json({
        route: "/notfound",
        message: "This route doesn't exist"
    });
});