import {
    GET_EMPLOYEES,
    FILTER_EMPLOYEES,
    SET_LOADING,
    CLEAR_FILTER,
    SET_SORTEDNAME,
    SORT_EMPLOYEESDOB,
    SORT_EMPLOYEESNAME,
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload,
                loading: false,
            };
        case FILTER_EMPLOYEES:
            return {
                ...state,
                filtered: state.employees.filter((employee) => {
                    const regex = new RegExp(`${action.payload}`, "gi");
                    return employee.email.match(regex);
                }),
            };
        case SORT_EMPLOYEESDOB:
            return {
                ...state,
                employees: action.payload,
            };
        case SORT_EMPLOYEESNAME:
            return {
                ...state,
                employees: action.payload,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case SET_SORTEDNAME:
            return {
                ...state,
                sortedName: !state.sortedName,
            };
        case SET_SORTEDNAME:
            return {
                ...state,
                sortedDOB: !state.sortedDOB,
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null,
            };
        default:
            return state;
    }
};
