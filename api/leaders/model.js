const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaderModel = new Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  name: { type: String, required: true },
  phoneNumber: { type: Number, required: true ,
    validate: {
        validator: function(value) {
            const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
            return regex.test(value)
        },
        message: '{VALUE} is not a valid phone number'
    }
},
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('leaders', leaderModel);
