const mongoose = require("mongoose")

const { Schema } = mongoose

const schema = new Schema({
  uuid: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  ownerUuid: {
    type: String,
    required: true
  },
  members: [
    {
      uuid: {
        type: String
      }
    }
  ]
})

export default mongoose.model("Queue", schema)
