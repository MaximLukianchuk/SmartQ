import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import io from "socket.io-client"

import { loadQueue } from "../store/actions/queue"
// import { useLocalStorage } from "../hooks/useLocalStorage"

export const QueuePage = () => {
  const dispatch = useDispatch()
  const socket = io.connect("http://localhost:5000")
  const { id } = useParams()
  // const [uuid, setUuid] = useLocalStorage("smartQueueUUID", null)

  useEffect(() => {
    socket.emit("loadQueue", id)
    dispatch(loadQueue(socket))
  })

  return (
    <div>
      <h1>Очередь {id}</h1>
    </div>
  )
}
