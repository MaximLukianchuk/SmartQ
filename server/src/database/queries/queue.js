import { generateUuid } from "./utils"
import Queue from "../models/Queue"

export const createQueue = async ({ name, ownerUuid }) => {
  const uuid = generateUuid()
  const userUuid = ownerUuid || generateUuid()

  await Queue.create({ uuid, name, ownerUuid: userUuid })

  return { uuid, ownerUuid: userUuid }
}
