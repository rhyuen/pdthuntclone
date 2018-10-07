const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: String,
    category: String,
    summaryDescription: String,
    fullDescription: {
        type: String,
        default: "empty, thus far."
    },
    count: {
        type: Number,
        default: 0
    },
    saved: {
        type: [String],
        default: []
    },
    subscribed: {
        type: [String],
        default: []
    }
});

module.exports = mongoose.model("Product", productSchema);