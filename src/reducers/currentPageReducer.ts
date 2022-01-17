import {AnyAction} from "redux";

export const currentPageReducer = (state: number = 1, action: AnyAction) => {
    switch (action.type) {
        case "UPDATE_CURRENT_PAGE":
            return action.payload
        default:
            return state
    }
}