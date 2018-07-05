const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleModel = new Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  createdBy: { type: String, required: true },
  content: { type: String, required: true },
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('articles', articleModel);
