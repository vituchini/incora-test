import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    usersPage: usersReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
   applyMiddleware(thunkMiddleware)
));
//let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

window.store = store