import { createApiPostMethod } from "./utils"
import { createQueue } from "../database/queries/queue"

export const create = createApiPostMethod(createQueue)
