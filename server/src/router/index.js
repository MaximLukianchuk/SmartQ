import { Router } from "express"
import * as Queue from "./queue"

export const createRouter = () => {
  const router = new Router()

  router.route("/queue/create").post(Queue.create)

  return router
}
