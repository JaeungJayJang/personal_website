import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import fs from "fs";


const GITHUB_LINK = "https://github.com/jaeungjayjang";
const LINKED_LINK = "https://www.linkedin.com/in/jaeung-jang/";


interface dataProps {
    name: string;
    firstName: string;
    lastName: string;
    alternativeName: string;
    description: Array<string>;
}

const getData = (): dataProps => {
    const file = fs.readFileSync("data/about.json", { encoding: "ascii" });
    let fileObj = JSON.parse(file);
    return fileObj;
}

const About = () => {
    const data = getData();
    return (
        // <Container id="about" height="h-screen">
        //     <Hero/>
        // </Container>
        <div id="about" className="h-screen bg-background">
            <div className="flex flex-col justify-center items-center gap-4 p-4 h-full bg-background">
                <div className="flex flex-row justify-center h-full py-20 max-w-screen-xl text-white w-full">
                    <div id="left" className="w-1/2">
                    </div>
                    <div id="right" className="w-1/2 flex flex-col justify-center items-center gap-4">

                        <div className="w-full flex flex-col gap-4">
                            <h1 className="text-5xl font-semibold">
                                {`Hello, I'm ${data.name}`}
                            </h1>
                            {
                                data.description.map((desc: string, index: number) => {
                                    return (
                                        <p key={index} className="text">
                                            {desc}
                                        </p>
                                    )
                                })
                            }

                            <div className="flex gap-4 pt-8">
                                <a href={GITHUB_LINK} target="_blank" rel="noreferrer">
                                    <FaGithub className="text-2xl opacity-60 hover:opacity-100" />
                                </a>
                                <a href={LINKED_LINK} target="_blank" rel="noreferrer">
                                    <FaLinkedinIn className="text-2xl opacity-60 hover:opacity-100" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;