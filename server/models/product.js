const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    //TODO: Set name to Unique True
    name: {
        type: String,
        unique: false
    },
    category: String,
    summaryDescription: String,
    fullDescription: {
        type: String,
        default: "empty, thus far."
    },
    count: {
        type: [String],
        default: []
    },
    saved: {
        type: [String],
        default: []
    },
    subscribed: {
        type: [String],
        default: []
    }
}, {
    timestampes: {
        createdAt: "created_at"
    }
});

module.exports = mongoose.model("Product", productSchema);