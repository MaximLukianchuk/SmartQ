import { useState, useCallback } from "react"

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (url, method = "GET", body = null, headers = {}) => {
    setLoading(true)
    try {
      const parsedBody = body && JSON.stringify(body)
      const parsedHeaders = body ? { ...headers, "Content-Type": "application/json" } : headers
      const response = await fetch(url, { method, body: parsedBody, headers: parsedHeaders })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Http request error")
      }

      setLoading(false)

      return data
    } catch (err) {
      setLoading(false)
      setError(err.message)
      throw err
    }
  }, [])

  const clearError = () => setError(null)

  return { loading, request, error, clearError }
}
