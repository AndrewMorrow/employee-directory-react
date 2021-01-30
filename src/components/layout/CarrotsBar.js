import React from "react";

const CarrotsBar = () => {
    return (
        <div className="container">
            <div className="row border-top border-2 border-bottom ">
                <div className="d-flex justify-content-center col-2">Image</div>
                <div className="d-flex justify-content-center col-2">Name</div>
                <div className="d-flex justify-content-center col-3">Phone</div>
                <div className="d-flex justify-content-center col-3">Email</div>
                <div className="d-flex justify-content-center col-2">DOB</div>
            </div>
        </div>
    );
};

export default CarrotsBar;