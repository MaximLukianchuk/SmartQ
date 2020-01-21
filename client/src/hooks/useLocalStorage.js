import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = value => {
    try {
      const vaalueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(vaalueToStore)
      window.localStorage.setItem(key, JSON.stringify(vaalueToStore))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}