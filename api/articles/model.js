const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleModel = new Schema({
    title: {type: String, required: true },
    description: {type: String },
    createBy: {type: String },
    content: {type: String },
    active: {type: Boolean, default: true}
    }
)

module.exports = mongoose.model("article", articleModel)