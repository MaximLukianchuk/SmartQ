import React from 'react'

import { useLocalStorage } from '../hooks/useLocalStorage'

export const MainPage = () => {

  const [uuid, setUuid] = useLocalStorage('uuid')

  return (
    <div>
      <h1>Hello</h1>
      <h2>Your secret UUID is {uuid}</h2>
      <input type='text' onChange={({target: {value}}) => setUuid(value)}/>
    </div>
  )
}
