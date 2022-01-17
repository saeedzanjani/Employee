import {AnyAction} from "redux";

export const searchDateReducer = (state: string = '', action: AnyAction) => {
    switch (action.type) {
        case "UPDATE_SEARCH_DATE":
            return action.payload
        default:
            return state
    }
}