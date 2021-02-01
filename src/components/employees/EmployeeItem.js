import React from "react";
import employeeReducer from "../../context/employee/employeeReducer";
import PropTypes from "prop-types";

const EmployeeItem = ({ employee }) => {
    return (
        <div className="container ">
            <div className="row border-top border-2 border-bottom">
                <div className="d-flex justify-content-center col-1 mb-1 mt-1">
                    <img src={employee.picture.thumbnail}></img>
                </div>
                <div className="d-flex justify-content-center col-3">
                    {employee.name.first} {employee.name.last}
                </div>
                <div className="d-flex justify-content-center col-2">
                    {employee.cell}
                </div>
                <div className="d-flex justify-content-center col-4">
                    {employee.email}
                </div>
                <div className="d-flex justify-content-center col-2">
                    {new Date(employee.dob.date).toLocaleDateString()}
                </div>
            </div>
        </div>
    );
};

EmployeeItem.propTypes = {
    employee: PropTypes.object.isRequired,
};

export default EmployeeItem;
