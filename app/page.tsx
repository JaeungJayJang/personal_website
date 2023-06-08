import React from "react";
import About from "./components/about";
import Experience from "./components/experience";
import Project from "./components/project";

const HomePage = () => {
    return (
        <>
            <About/>
            <Experience/>
            <Project/>
            {/* <Contact/>  */}
        </>
    )
}

export default HomePage;