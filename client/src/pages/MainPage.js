import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import { useHttp, useLocalStorage } from "../hooks"

export const MainPage = () => {
  const { request } = useHttp()
  const [ownerUuid, setUuid] = useLocalStorage("smartQ_uuid", null)

  // const socket = io.connect("http://localhost:5000")
  // const dispatch = useDispatch()

  const [data, setData] = useState(null)
  const [name, setName] = useState("")

  useEffect(() => {
    if (data && data.ownerUuid) {
      setUuid(data.ownerUuid)
    }
  }, [data, setUuid])

  const changeHandler = event => {
    setName(event.target.value)
  }

  const createQueueHandler = async () => {
    try {
      const newData = await request("/queue/create", "POST", { name, ownerUuid })
      setData(newData)
    } catch (err) {
      console.error(err)
    }
  }

  return !data ? (
    <div>
      <h1>Самая главная страница SmartQ</h1>
      <input placeholder="Название очереди:" onChange={changeHandler} />
      <button type="button" onClick={createQueueHandler}>
        Создать очередь!
      </button>
    </div>
  ) : (
    <Redirect to={`/${data.uuid}`} />
  )
}
