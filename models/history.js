const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
    expression: String,
    result: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("History", historySchema);