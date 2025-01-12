import React from "react";
import About from "./components/about";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import HeroContainer from "@/app/components/container/HeroContainer";

const HomePage = () => {
    return (
        <>
            <HeroContainer />
            <About />
            {/* <div className="h-40 bg-green-100 relative">
                test
            </div> */}
            {/* <div className="h-40 bg-green-100 relative">
                test
            </div> */}
            {/* <div className="h-40 bg-green-100 relative">
                test
            </div> */}
            <Experiences />
            <Projects />
            {/* <div className="h-[3000px] bg-background">

            </div> */}
            {/* <Contact /> */}
        </>
    )
}

export default HomePage;