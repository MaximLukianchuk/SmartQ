import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import io from "socket.io-client"

import { loadMembers } from "../store/actions/members"

export const MainPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const socket = io.connect("http://localhost:5000")

    dispatch(loadMembers(socket))
  })

  return (
    <div>
      <h1>Самая главная страница SmartQ</h1>
      <button type="button">Сосздать очередь!</button>
    </div>
  )
}
