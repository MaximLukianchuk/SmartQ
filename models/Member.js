const mongoose = require("mongoose")

const { Schema } = mongoose

const schema = new Schema({
  _id: Number,
  uuid: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Member", schema)
