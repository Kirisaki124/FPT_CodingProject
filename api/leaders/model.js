const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaderModel = new Schema({
  title: { type: String, required: true },
  term: { type: String, required: true },
  year: { type: Number },
  name: { type: String, required: true },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        const regex = /(09|01[2|6|8|9])+([0-9]{8})\b/;
        return regex.test(value);
      },
      message: '{VALUE} is not a valid phone number'
    }
  },
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('leaders', leaderModel);
