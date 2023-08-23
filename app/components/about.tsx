import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import Hero from "./general/hero";
import Container from "./general/container";

const GITHUB_LINK = "https://github.com/qmffkem";
const LINKED_LINK = "https://www.linkedin.com/in/jaeung-jang/";


const BlueSphereBio = () => {

    return (
        <a className="inline-block text-red-400" href="https://bluespherebio.com/" target="_black">
            BlueSphere Bio
        </a>
    )
}

const About = () => {

    return (
        <Container id="about" height="h-screen">
            <Hero/>
        </Container>
    )
}

export default About;
