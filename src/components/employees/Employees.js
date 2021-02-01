import React, { useContext, useEffect } from "react";
import EmployeeItem from "./EmployeeItem";
import EmployeeContext from "../../context/employee/employeeContext";
import Spinner from "../layout/Spinner";

const Employees = () => {
    const employeeContext = useContext(EmployeeContext);

    const { getEmployees, employees, loading, filtered } = employeeContext;

    useEffect(() => {
        getEmployees();
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Spinner />;
    } else {
        return (
            <div>
                {filtered !== null
                    ? filtered.map((employee) => (
                          <EmployeeItem
                              key={employee.login.uuid}
                              employee={employee}
                          />
                      ))
                    : employees.map((employee) => (
                          <EmployeeItem
                              key={employee.login.uuid}
                              employee={employee}
                          />
                      ))}
            </div>
        );
    }
};

export default Employees;
