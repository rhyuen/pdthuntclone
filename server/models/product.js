const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    category: {
        type: [String],
        default: []
    },
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
    },
    author: {
        type: String,
    }
}, {
    timestamps: {
        createdAt: "created_at"
    }
});

module.exports = mongoose.model("Product", productSchema);