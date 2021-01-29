import React from "react";

const Header = () => {
    return (
        <header
            style={{
                backgroundColor: "blue",
                borderBottom: "solid red",
                color: "whitesmoke",
                height: "4rem",
                marginBottom: "1rem",
            }}
        >
            <div className="d-flex justify-content-center">
                Employee Directory
            </div>
            <div className="d-flex justify-content-center">
                Filter by clicking the carrots or use the search bar.
            </div>
        </header>
    );
};

export default Header;
