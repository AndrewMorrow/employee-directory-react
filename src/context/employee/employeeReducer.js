import {
    GET_EMPLOYEES,
    FILTER_EMPLOYEES,
    SET_LOADING,
    CLEAR_FILTER,
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
                    return (
                        employee.name.first.match(regex) ||
                        employee.name.last.match(regex) ||
                        employee.email.match(regex)
                    );
                }),
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
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
