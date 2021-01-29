import React from "react";
import EmployeeContext from "./employeeContext";
import EmployeeReducer from "./employeeReducer";
import { GET_EMPLOYEES, SEARCH_EMPLOYEES, SET_LOADING } from "../types";

const EmployeeState = () => {
    const initialState = {
        employees: [],
        employee: {},
        loading: false,
    };

    const [state, dispatch] = useReducer(EmployeeReducer, initialState);

    // Get Employees

    // Search Employees

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return <div></div>;
};

export default EmployeeState;
