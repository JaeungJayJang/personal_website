import React from "react";
import About from "./components/about";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import Contact from "./components/contact";

const HomePage = () => {
    return (
        <>
            <About />
            <Experiences />
            <Projects />
            <Contact/> 
        </>
    )
}

export default HomePage;