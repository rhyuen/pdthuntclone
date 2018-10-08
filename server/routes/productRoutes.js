const express = require("express");
const wrapAsync = require("../common/util.js");
const Product = require("../models/product.js");
const router = express.Router();

router.get("/", wrapAsync(async (req, res) => {
    const data = await Product.find();
    console.log(data);
    const formedResponse = {
        data: data
    }
    res.status(200).json(formedResponse);
}));

router.post("/", wrapAsync(async (req, res) => {
    const {
        name,
        summaryDescription,
        category
    } = req.body;
    if (!name || !summaryDescription || !category) {
        throw new Error("Bad Request, missing 'name', 'description' or 'category'.");
    }

    let latest = new Product({
        name,
        summaryDescription,
        category
    });

    let savedItem = await latest.save();
    return res.status(201).json(savedItem);

}));

router.get("/:id", wrapAsync(async (req, res) => {
    const identifier = req.params.id;
    const result = await Product.findById(identifier);
    res.status(200).json(result);
}));

router.put("/:id", wrapAsync(async (req, res) => {
    const identifier = req.params.id;
    const {
        action,
        username
    } = req.body;

    const result = await Product.findOneAndUpdate({
        _id: identifier
    }, {
        $addToSet: {
            count: username
        }
    }, {
        new: true
    });
    res.status(200).json(result);
}));

module.exports = router;