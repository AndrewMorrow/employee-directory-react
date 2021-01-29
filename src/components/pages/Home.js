import React from "react";
import Searchbar from "../layout/Searchbar";
import Header from "../layout/Header";
import Employees from "../employees/Employees";
import CarrotsBar from "../layout/CarrotsBar";

const Home = () => {
    return (
        <>
            <Header />
            <Searchbar />
            <CarrotsBar />
            <Employees />
        </>
    );
};

export default Home;
