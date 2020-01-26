import memberModel from "./models/Member"

const express = require("express")
const mongoose = require("mongoose")
const http = require("http")
const socketServer = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = socketServer(server)

const { PORT } = process.env
const { DB_URI } = process.env

async function start() {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    server.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log("Server Error:", e.message)
    process.exit(1)
  }
}

start()

io.on("connection", socket => {
  console.log(`Connected to Socket!! ${socket.id}`)

  socket.on("disconnect", () => {
    console.log(`Disconnected - ${socket.id}`)
  })

  memberModel.find({}, (error, result) => {
    if (error) {
      console.log(error)
    } else {
      socket.emit("membersLoaded", result)
    }
  })
})
