import {IUsers} from "../DTOs/interfaces/IUsers";
import {AnyAction} from "redux";

export const usersReducer = (state: IUsers[] = [], action: AnyAction) => {
    switch (action.type) {
        case "INIT_USERS":
            return [...action.payload]
        default:
            return state
    }
}