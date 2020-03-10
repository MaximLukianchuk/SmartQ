import { useState } from "react"

export const useForm = initialState => {
  const [state, setState] = useState(initialState)

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  return [state, handleChange]
}
