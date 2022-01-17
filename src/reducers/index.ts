import {combineReducers} from "redux";
import {absencesReducer} from "./absencesReducer";
import {usersReducer} from "./userReducer";
import {errorReducer} from "./errorReducer";
import {loadingReducer} from "./loadingReducer";
import {currentPageReducer} from "./currentPageReducer";
import {searchTypeReducer} from "./searchTypeReducer";
import {searchDateReducer} from "./searchDateReducer";

export const reducers = combineReducers({
    absences: absencesReducer,
    users: usersReducer,
    error: errorReducer,
    loading: loadingReducer,
    currentPage: currentPageReducer,
    searchType: searchTypeReducer,
    searchDate: searchDateReducer
})