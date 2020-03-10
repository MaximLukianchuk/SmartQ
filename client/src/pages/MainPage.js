import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import { useHttp, useLocalStorage, useForm } from "../hooks"

export const MainPage = () => {
  const { httpRequest } = useHttp()
  const [ownerUuid, setOwnerUuid] = useLocalStorage("smartQ_uuid", null)
  const [queueUuid, setQueueUuid] = useState(null)
  const [values, handleChange] = useForm({ name: "" })

  const createQueueHandler = async event => {
    event.preventDefault()
    try {
      const uuidData = await httpRequest("/queue/create", "POST", { name: values.name, ownerUuid })
      setOwnerUuid(uuidData.ownerUuid)
      setQueueUuid(uuidData.uuid)
    } catch (err) {
      console.error(err)
    }
  }

  return !queueUuid ? (
    <div>
      <h1>Самая главная страница SmartQ</h1>
      <form onSubmit={createQueueHandler}>
        <input
          name="name"
          value={values.name}
          placeholder="Название очереди:"
          onChange={handleChange}
        />
        <button type="submit">Создать очередь!</button>
      </form>
    </div>
  ) : (
    <Redirect to={`/${queueUuid}`} />
  )
}
