import React, {useEffect, useState} from 'react';
import {Pagination} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {updateCurrentPage} from "../actions";
import {filterByDate, filterByType} from "../utils/searchbarHandler";
import {RootState} from "../store";

const Paginate = () => {

    const absences = useSelector((state: RootState) => state.absences)
    const error = useSelector((state: RootState) => state.error)
    const loading = useSelector((state: RootState) => state.loading)
    const currentPage = useSelector((state: RootState) => state.currentPage)
    const searchType = useSelector((state: RootState) => state.searchType)
    const searchDate = useSelector((state: RootState) => state.searchDate)

    const dispatch = useDispatch()

    let filterAbsenceByType = filterByType(filterByDate(absences, searchDate), searchType)
    let filterAbsenceByDate = filterByDate(filterByDate(absences, searchType), searchDate)
    let allFilteredAbsences = [...filterAbsenceByType, ...filterAbsenceByDate]
    let allFilters = Array.from(new Set(allFilteredAbsences))

    let pageCount = Math.ceil(allFilters.length / 7)
    let pages = Array(pageCount).fill(null).map((item, index) => {
        return {page: index + 1, id: Math.floor(Math.random() * 1000)}
    })

    const handlePage = (id: any) => {
        let active: any = pages.find(item => item.id === id)
        dispatch(updateCurrentPage(active.page))
    }

    console.log('Paginate')

    return (
        <div>
            {allFilters.length > 7 && !error && !loading ?
                <div className="d-flex align-items-center justify-content-center">
                    <Pagination>
                        <Pagination.First onClick={() => dispatch(updateCurrentPage(1))}/>
                        <Pagination.Prev disabled={currentPage === 1}
                                         onClick={() => dispatch(updateCurrentPage(currentPage - 1))}/>
                        {pages.map((item) => (
                            <Pagination.Item
                                key={item.id}
                                onClick={() => handlePage(item.id)}
                                className={item.page == currentPage ? 'active' : ''}
                            >{item.page}</Pagination.Item>
                        ))}
                        <Pagination.Next disabled={currentPage === pages[pages.length - 1].page}
                                         onClick={() => dispatch(updateCurrentPage(currentPage + 1))}/>
                        <Pagination.Last onClick={() => dispatch(updateCurrentPage(6))}/>
                    </Pagination>
                </div> : null}
        </div>
    );
};

export default Paginate;
