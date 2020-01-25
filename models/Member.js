const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  _id: {
    type: Number,
    required: true,
    unique: true
  },
  uuid: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Member', schema);