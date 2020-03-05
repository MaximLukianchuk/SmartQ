import * as proxy from "http-proxy-middleware"

module.exports = function(app) {
  app.use(
    "/*",
    proxy({
      target: "http://localhost:5000",
      changeOrigin: true
    })
  )
}
