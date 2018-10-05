const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    id: String,
    name: String,
    category: String,
    summaryDescription: String,
    fullDescription: String,
    count: Number,
    saved: [String],
    subscribed: [String]
});

module.exports = mongoose.model("Product", productSchema);