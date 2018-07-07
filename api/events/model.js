const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Dates = new Schema({
  startAt: { type: Date, required: true },
  finshedAt: { type: Date }
});
const eventModel = new Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  imageUrl: {
    type: String,
    default: '',
    validate: {
      validator: function(value) {
        const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        return regex.test(value);
      },
      message: '{VALUE} is not a valid url!'
    }
  },
  date: { type: Dates, required: true },
  articleUrl: { type: String, required: true },
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('events', eventModel);
