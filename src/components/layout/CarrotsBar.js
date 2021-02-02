import React, { useContext, useState } from "react";
import { FaSortDown, FaSortUp, FaSort } from "react-icons/fa";
import EmployeeContext from "../../context/employee/employeeContext";

const CarrotsBar = () => {
    const employeeContext = useContext(EmployeeContext);
    const {
        employees,
        sortedName,
        setSortedName,
        sortedDOB,
        setSortedDOB,
        sortEmployeesDOB,
        sortEmployeesName,
    } = employeeContext;

    const [sortDOB, setSortDOB] = useState(null);
    const [sortName, setSortName] = useState(null);

    const onNameSort = (e) => {
        if (sortName === null) {
            setSortName(true);
            sortEmployeesName(true);
        } else if (sortName) {
            setSortName(false);
            sortEmployeesName(false);
        } else {
            setSortName(true);
            sortEmployeesName(true);
        }
    };

    const onDOBSort = (e) => {
        if (sortDOB === null) {
            setSortDOB(true);
            sortEmployeesDOB(true);
        } else if (sortDOB) {
            setSortDOB(false);
            sortEmployeesDOB(false);
        } else {
            setSortDOB(true);
            sortEmployeesDOB(true);
        }
    };

    return (
        <div className="container">
            <div className="row border-top border-2 border-bottom ">
                <div className="d-flex justify-content-center col-1">Image</div>
                <div className="d-flex justify-content-center col-3">
                    Name{" "}
                    <span onClick={onNameSort}>
                        {sortName === null && <FaSort />}
                        {sortName && <FaSortDown />}
                        {!sortName && sortName !== null && <FaSortUp />}
                    </span>
                </div>
                <div className="d-flex justify-content-center col-2">Phone</div>
                <div className="d-flex justify-content-center col-4">Email</div>
                <div className="d-flex justify-content-center col-2">
                    DOB{" "}
                    <span onClick={onDOBSort}>
                        {sortDOB === null && <FaSort />}
                        {sortDOB && <FaSortDown />}
                        {!sortDOB && sortDOB !== null && <FaSortUp />}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CarrotsBar;
