import React, { useReducer } from "react";
import EmployeeContext from "./employeeContext";
import EmployeeReducer from "./employeeReducer";
import {
    GET_EMPLOYEES,
    FILTER_EMPLOYEES,
    SET_LOADING,
    CLEAR_FILTER,
} from "../types";

const EmployeeState = (props) => {
    const initialState = {
        employees: [],
        employee: {},
        loading: false,
        filtered: null,
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
        dispatch({ type: FILTER_EMPLOYEES, payload: text });
    };

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    return (
        <EmployeeContext.Provider
            value={{
                employees: state.employees,
                employee: state.employee,
                loading: state.loading,
                filtered: state.filtered,
                getEmployees,
                filterEmployees,
                clearFilter,
            }}
        >
            {props.children}
        </EmployeeContext.Provider>
    );
};

export default EmployeeState;
