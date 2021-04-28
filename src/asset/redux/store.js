import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import coinReducer from "./reducer"
import searchBarReducer from "./searchBar/searchBarReducer"

const rootReducer = combineReducers({ coinReducer, searchBarReducer })
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store


