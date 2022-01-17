import React, {useEffect} from 'react';
import {Alert} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getAbsences, getUsers} from "../../actions";
import Absences from "../absences/Absences";
import Loading from "../../shared/loading/Loading";
import {RootState} from "../../store";

const Employees = () => {

    const error = useSelector((state: RootState) => state.error)
    const loading = useSelector((state: RootState) => state.loading)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAbsences())
        dispatch(getUsers())
    }, [])

    let errorMessage = null
    if (error) {
        return (<Alert variant="warning" style={{marginTop: '12rem'}}>Internet Connection or Server Side
            Error: {error}</Alert>)
    }

    console.log('Employees')

    return (
        <>
            {errorMessage}
            {loading ?
                <Loading/>
                : null}
            <Absences/>
        </>
    )
};

export default Employees;
