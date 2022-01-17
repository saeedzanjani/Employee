import {AnyAction} from "redux";

export const searchTypeReducer = (state: string = '', action: AnyAction) => {
    switch (action.type) {
        case "UPDATE_SEARCH_TYPE":
            return action.payload
        default:
            return state
    }
}