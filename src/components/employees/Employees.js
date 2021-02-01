import React, { useContext, useEffect } from "react";
import EmployeeItem from "./EmployeeItem";
import EmployeeContext from "../../context/employee/employeeContext";
import Spinner from "../layout/Spinner";

const Employees = () => {
    const employeeContext = useContext(EmployeeContext);

    const { getEmployees, employees, loading, filtered } = employeeContext;

    useEffect(() => {
        console.log("Getting employees");
        getEmployees();
        // eslint-disable-next-line
    }, []);

    if (employees !== null && employees.length === 0 && !loading) {
        return <h4>No employees to display</h4>;
    }

    return (
        <div>
            {employees !== null && !loading ? (
                <>
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
                </>
            ) : (
                <Spinner />
            )}
        </div>
    );
};

export default Employees;
