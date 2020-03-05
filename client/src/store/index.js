import { createStore, combineReducers } from "redux"

import { membersReducer } from "./reducers/members"
import { queueReducer } from "./reducers/queue"
import { getMiddleware } from "./middleware"

const rootReducer = combineReducers({
  queue: queueReducer,
  members: membersReducer
})

export const getStore = () => createStore(rootReducer, getMiddleware())
