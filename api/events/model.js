const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  date: { type: Date, required: true },
  articleUrl: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        return regex.test(value);
      },
      message: '{VALUE} is not a valid url!'
    }
  },
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('events', eventModel);
