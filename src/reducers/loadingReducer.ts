import {AnyAction} from "redux";

export const loadingReducer = (state: boolean = false, action: AnyAction) => {
    switch (action.type) {
        case "SHOW_LOADING":
            return state = true
        case "HIDE_LOADING":
            return state = false
        default:
            return state
    }
}