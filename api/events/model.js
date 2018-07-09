const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventModel = new Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  image: {type: Buffer},
  contentType: {type: String},
  date: { type: Date, required: true },
  content: { type: String, required: true},
  location: { type: String },
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('events', eventModel);
  