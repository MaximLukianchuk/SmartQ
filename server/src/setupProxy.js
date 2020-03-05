const proxy = require("http-proxy-middleware")

export default app => {
  app.use(
    "/*",
    proxy({
      target: "http://localhost:5000",
      changeOrigin: true
    })
  )
}
