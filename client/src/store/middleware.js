import ReduxThunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export const getMiddleware = () => composeWithDevTools(
  applyMiddleware(ReduxThunk),
)