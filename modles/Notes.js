const mongoose = require("mongoose")


module.exports = mongoose.model("note", new mongoose.Schema({
    task: { type: String, required: true },
    desc: { type: String, required: true },
}))