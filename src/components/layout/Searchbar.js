import React, { useContext, useState, useEffect } from "react";
import EmployeeContext from "../../context/employee/employeeContext";

const Searchbar = () => {
    const employeeContext = useContext(EmployeeContext);
    const { clearFilter, filterEmployees, filtered } = employeeContext;
    const [text, setText] = useState("");

    // useEffect(() => {
    //     if (filtered === null) {
    //         setText("");
    //     }
    // }, []);

    // const onChange = (e) => {
    //     setText(e.target.value);
    //     console.log(text);
    //     if (text !== "") {
    //         filterEmployees(e.target.value);
    //     } else {
    //         // clearFilter();
    //         console.log("Clear");
    //     }
    // };

    const onChange = (e) => setText(e.target.value);

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     if (text === "") {
    //         alert("Please enter something to search employees");
    //     } else {
    //         filterEmployees(text);
    //     }
    // };

    return (
        <form className="d-flex justify-content-center mb-2">
            <input
                type="text"
                name="text"
                placeholder="Search Employees..."
                value={text}
                onChange={onChange}
            />
        </form>
    );
};

export default Searchbar;
