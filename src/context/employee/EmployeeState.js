import React, { useReducer } from "react";
import EmployeeContext from "./employeeContext";
import EmployeeReducer from "./employeeReducer";
import {
    GET_EMPLOYEES,
    FILTER_EMPLOYEES,
    SET_LOADING,
    CLEAR_FILTER,
    SORT_EMPLOYEESDOB,
    SORT_EMPLOYEESNAME,
    SET_SORTEDDOB,
    SET_SORTEDNAME,
} from "../types";

const EmployeeState = (props) => {
    const initialState = {
        employees: [],
        employee: {},
        loading: false,
        filtered: null,
        sortedName: null,
        sortedDOB: null,
    };

    const [state, dispatch] = useReducer(EmployeeReducer, initialState);

    // Get Employees from RandomAPI
    const getEmployees = async () => {
        setLoading();

        const res = await fetch("https://randomuser.me/api/?results=10");
        const data = await res.json();

        dispatch({
            type: GET_EMPLOYEES,
            payload: data.results,
        });
    };

    // Search Employees with input field
    const filterEmployees = (text) => {
        // console.log(text);
        dispatch({ type: FILTER_EMPLOYEES, payload: text });
    };

    // Sort employees name
    const sortEmployeesName = (bool) => {
        let sortedName;
        const sortNames = (a, b) => {
            const nameA = a.name.last.toUpperCase();
            const nameB = b.name.last.toUpperCase();
            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            }
            if (bool) {
                return comparison;
            } else if (!bool) {
                return comparison * -1;
            }
        };

        if (state.filtered === null) {
            sortedName = state.employees.sort(sortNames);
        } else {
            sortedName = state.filtered.sort(sortNames);
        }

        dispatch({ type: SORT_EMPLOYEESNAME, payload: sortedName });
    };

    // Sort Employees by DOB
    const sortEmployeesDOB = (bool) => {
        let sortedAge;
        const sortAge = (a, b) => {
            const nameA = a.dob.age;
            const nameB = b.dob.age;
            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            }
            if (bool) {
                return comparison;
            } else if (!bool) {
                return comparison * -1;
            }
        };

        if (state.filtered === null) {
            sortedAge = state.employees.sort(sortAge);
        } else {
            sortedAge = state.filtered.sort(sortAge);
        }

        dispatch({ type: SORT_EMPLOYEESDOB, payload: sortedAge });
    };

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    // Set sortedName
    const setSortedName = () => {
        dispatch({ type: SET_SORTEDNAME });
    };

    // Set sortedDOB
    const setSortedDOB = () => {
        dispatch({ type: SET_SORTEDDOB });
    };

    return (
        <EmployeeContext.Provider
            value={{
                employees: state.employees,
                employee: state.employee,
                loading: state.loading,
                filtered: state.filtered,
                sortedName: state.sortedName,
                getEmployees,
                filterEmployees,
                clearFilter,
                setLoading,
                setSortedName,
                setSortedDOB,
                sortEmployeesDOB,
                sortEmployeesName,
                sortedDOB: state.sortedDOB,
            }}
        >
            {props.children}
        </EmployeeContext.Provider>
    );
};

export default EmployeeState;
