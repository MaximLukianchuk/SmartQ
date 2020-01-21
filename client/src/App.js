import React from 'react';
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {

  const [uuid, setUuid] = useLocalStorage('uuid')

  return (
    <div>
      <h1>Hello</h1>
      <h2>Your secret UUID is {uuid}</h2>
      <input type='text' onChange={({target: {value}}) => setUuid(value)}/>
    </div>
  )
}

export default App;
