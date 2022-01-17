import React from 'react';
import {Accordion} from "react-bootstrap";
import {pagination} from "../../utils/pagination";
import {useSelector} from "react-redux";
import Paginate from "../../shared/Paginate";
import SearchBar from "../searchBar/SearchBar";
import {filterByDate, filterByType} from "../../utils/searchbarHandler";
import {RootState} from "../../store";

const Absences = () => {

    const users = useSelector((state:RootState) => state.users)
    const absences = useSelector((state:RootState) => state.absences)
    const currentPage = useSelector((state:RootState) => state.currentPage)
    const searchType = useSelector((state:RootState) => state.searchType)
    const searchDate = useSelector((state:RootState) => state.searchDate)

    let filterAbsenceByType = filterByType(filterByDate(absences,searchDate),searchType)
    let filterAbsenceByDate = filterByDate(filterByDate(absences,searchType),searchDate)
    let allFilteredAbsences = [...filterAbsenceByType, ...filterAbsenceByDate]
    let allFilters = Array.from(new Set(allFilteredAbsences))

    let allAbsences = pagination( allFilters, currentPage, 7)


    console.log('Absences')

    return (
        <div>
            <SearchBar />
            {allAbsences.map((item:any, index:any) => {
                let absence = users.filter((ab:any) => ab.userId === item.userId)
                return (
                    <div key={item.id}>
                        <Accordion className="m-4 w-50 mx-auto">
                            <Accordion.Item className="bg-warning" eventKey="1">
                                <Accordion.Header style={{textAlign: 'center'}}>
                                    <h4>{item.type}</h4>
                                </Accordion.Header>
                                <Accordion.Body className="bg-warning">
                                    {absence.map((abs:any) => (
                                        <div key={abs.id}>
                                            <b>
                                                Name: {" "}
                                            </b>
                                            <span>
                                                {abs.name}
                                            </span>
                                            <br/>
                                            <b>
                                                start Absence: {" "}
                                            </b>
                                            <span>
                                                {item.startDate}
                                            </span>
                                            <br/>
                                            <b>
                                                End Absence: {" "}
                                            </b>
                                            <span>
                                                {item.endDate}
                                            </span>
                                            <br/>
                                            {item.memberNote &&
                                            <>
                                                <b>
                                                    User Note: {" "}
                                                </b>
                                                <span>
                                                {item.memberNote}
                                                </span>
                                            </>}
                                            <br/>
                                            <b>
                                                Request Date: {" "}
                                            </b>
                                            <span>
                                                {item.createdAt}
                                            </span>
                                            <br/>
                                            <b>
                                                Confirm Date: {" "}
                                            </b>
                                            <span>
                                                {item.confirmedAt}
                                            </span>
                                            <br/>
                                            {item.rejectedAt &&
                                            <>
                                                <b>
                                                    User Note: {" "}
                                                </b>
                                                <span>
                                                    {item.rejectedAt}
                                                </span>
                                            </>}
                                            <br/>
                                            {item.admitterNote &&
                                            <>
                                                <b>
                                                    Admin Note: {" "}
                                                </b>
                                                <span>
                                                    {item.admitterNote}
                                                </span>
                                            </>}
                                        </div>
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                )
            })}

            <Paginate />

        </div>
    );
};

export default Absences;
