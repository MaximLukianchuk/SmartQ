import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import io from "socket.io-client"

import { loadMembers } from '../store/actions/members'

export const MainPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const socket = io.connect('http://localhost:5000')

    dispatch(loadMembers(socket))
  })

  return (
    <div>
      <h1>Главная страница SmartQ</h1>
      <button style={{padding: '6px', background: 'pink'}}>Сосздать очередь!</button>
    </div>
  )
}
