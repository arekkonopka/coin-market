import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import coinReducer from "./reducer"
import filterReducer from './filterReducer'

const rootReducer = combineReducers({
  coinReducer, filterReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store


