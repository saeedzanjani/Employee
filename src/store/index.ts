import {applyMiddleware, compose, createStore} from "redux";
import {reducers} from "../reducers";
import thunk from "redux-thunk";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        composeEnhancers()
    )
)

export type RootState = ReturnType<typeof reducers>