import React from "react";
import About from "./components/about";
import AboutT from "./components/about_GMG_style";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import Contact from "./components/contact";
import HeroContainer from "@/app/components/container/HeroContainer";
import Spline from '@splinetool/react-spline';

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