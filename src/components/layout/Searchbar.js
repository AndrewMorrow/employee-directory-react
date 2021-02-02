import React, { useContext, useState, useEffect, useRef } from "react";
import EmployeeContext from "../../context/employee/employeeContext";

const Searchbar = () => {
    const employeeContext = useContext(EmployeeContext);
    const { clearFilter, filterEmployees, filtered } = employeeContext;
    // const [text, setText] = useState("");
    const text = useRef("");

    // useEffect(() => {
    //     // console.log(text);
    //     if (filtered === null) {
    //         // setText("");
    //         text.current.value = "";
    //     }
    // }, []);

    const onChange = (e) => {
        if (text.current.value !== "") {
            filterEmployees(e.target.value);
        } else {
            clearFilter();
        }
    };

    // const onChange = (e) => setText(e.target.value);

    return (
        <form className="d-flex justify-content-center mb-2">
            <input
                type="text"
                name="text"
                placeholder="Search Employees..."
                ref={text}
                onChange={onChange}
            />
        </form>
    );
};

export default Searchbar;
