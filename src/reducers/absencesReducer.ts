import {AnyAction} from "redux";
import {IAbsences} from "../DTOs/interfaces/IAbsences";

export const absencesReducer = (state: IAbsences[] = [], action: AnyAction) => {
    switch (action.type) {
        case "INIT_ABSENCES":
            return [...action.payload]
        case "UPDATE_ABSENCES":
            return [...action.payload]
        default:
            return state
    }
}