import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {updateCurrentPage, updateSearchDate, updateSearchType} from "../../actions";

const Searchbar = () => {

    const dispatch = useDispatch()

    let handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateSearchType(e.target.value))
        dispatch(updateCurrentPage(1))
    }

    let handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateSearchDate(e.target.value))
        dispatch(updateCurrentPage(1))
    }


    console.log('searchbar')

    return (
        <div className="mt-2">
            <div className="form-row">
                <div className="col-md-6 mx-auto">
                    <input
                        type="text"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleTypeChange(e)}
                        placeholder="Search By Absence"
                        className="form-control"
                    />
                </div>
                <div className="col-md-6 mx-auto">
                    <label htmlFor="search-date" className="my-2">Search By Start date</label>
                    <input
                        type="date"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleDateChange(e)}
                        id="search-date"
                        className="form-control"
                    />
                </div>
            </div>
        </div>
    );
};

export default React.memo(Searchbar);
