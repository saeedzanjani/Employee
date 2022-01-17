import {AnyAction} from "redux";

export const errorReducer = (state: string = '', action: AnyAction) => {
    switch (action.type) {
        case "SET_ERROR":
            return action.payload
        default:
            return state
    }
}