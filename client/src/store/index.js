import { createStore, combineReducers } from "redux"

import { membersReducer } from "./reducers/members"
import { getMiddleware } from "./middleware"

const rootReducer = combineReducers({
  members: membersReducer
})

export const getStore = () => createStore(rootReducer, getMiddleware())