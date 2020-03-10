import React from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import io from "socket.io-client"

import { enterQueue } from "../store/actions/queue"
import { useForm } from "../hooks"

export const QueuePage = () => {
  const dispatch = useDispatch()
  const socket = io.connect("http://localhost:5000")
  const { id } = useParams()
  const [values, handleChange] = useForm({ name: "" })
  // const [uuid, setUuid] = useLocalStorage("smartQ_uuid", null)

  const enterQueueHandler = async event => {
    event.preventDefault()
    try {
      socket.emit("enterQueue", { name: values.name, uuid: "123456" })
      dispatch(enterQueue(socket))
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <h1>Очередь {id}</h1>
      <form onSubmit={enterQueueHandler}>
        <input name="name" value={values.name} placeholder="Ваше имя:" onChange={handleChange} />
        <button type="submit">Войти в очередь!</button>
      </form>
    </div>
  )
}
