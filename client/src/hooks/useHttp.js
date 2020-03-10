import { useState, useCallback } from "react"

export const useHttp = () => {
  const [httpLoading, setHttpLoading] = useState(false)
  const [httpError, setHttpError] = useState(null)

  const httpRequest = useCallback(async (url, method = "GET", body = null, headers = {}) => {
    setHttpLoading(true)
    try {
      const parsedBody = body && JSON.stringify(body)
      const parsedHeaders = body ? { ...headers, "Content-Type": "application/json" } : headers
      const response = await fetch(url, { method, body: parsedBody, headers: parsedHeaders })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Http request error")
      }

      setHttpLoading(false)

      return data
    } catch (err) {
      setHttpLoading(false)
      setHttpError(err.message)
      throw err
    }
  }, [])

  const clearHttpError = () => setHttpError(null)

  return { httpLoading, httpRequest, httpError, clearHttpError }
}
