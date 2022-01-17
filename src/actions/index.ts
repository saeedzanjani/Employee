import {fetchAbsences, fetchUsers} from "../api";
import {Dispatch} from "redux";

export const getAbsences = () => {
    return async (dispatch: Dispatch) => {
        try {
            await dispatch({type: "SHOW_LOADING"})
            let {data: {payload}} = await fetchAbsences()
            await dispatch({type: "HIDE_LOADING"})
            await dispatch({type: "INIT_ABSENCES", payload: payload})
        } catch (err: any) {
            await dispatch({type: "HIDE_LOADING"})
            await dispatch({type: "SET_ERROR", payload: err.message})
        }
    }
}

export const getUsers = () => {
    return async (dispatch: Dispatch) => {
        try {
            await dispatch({type: "SHOW_LOADING"})
            let {data: {payload}} = await fetchUsers()
            await dispatch({type: "HIDE_LOADING"})
            await dispatch({type: "INIT_USERS", payload: payload})

        } catch (err: any) {
            await dispatch({type: "HIDE_LOADING"})
            await dispatch({type: "SET_ERROR", payload: err.message})
        }
    }
}

export const updateCurrentPage = (page:number) => {
    return async (dispatch: Dispatch) => {
        await dispatch({type: "UPDATE_CURRENT_PAGE", payload: page})
    }
}

export const updateSearchType = (type:string) => {
    return async (dispatch: Dispatch) => {
        await dispatch({type: "UPDATE_SEARCH_TYPE", payload: type})
    }
}

export const updateSearchDate = (date:string) => {
    return async (dispatch: Dispatch) => {
        await dispatch({type: "UPDATE_SEARCH_DATE", payload: date})
    }
}