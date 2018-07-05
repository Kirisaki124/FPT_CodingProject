const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectModel = new Schema({
  title: { type: String, required: true },
  team: { type: String, required: true },
  introUrl: {
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
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('projects', projectModel);
