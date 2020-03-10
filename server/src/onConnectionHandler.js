import queueModel from "./database/models/Queue"

export const onConnectionHandler = socket => {
  console.log(`Connected to Socket!! ${socket.id}`)

  socket.on("disconnect", () => {
    console.log(`Disconnected - ${socket.id}`)
  })

  socket.on("loadQueue", uuid => {
    queueModel.findOne({ uuid }, (error, result) => {
      if (error) {
        console.log(error)
      } else {
        socket.emit("queueLoaded", result)
      }
    })
  })
}
