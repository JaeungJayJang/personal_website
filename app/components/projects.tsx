import React from "react";

import ProjectCard from "./general/project";
import MainButton from "./general/button";
import Container from "./general/container";

interface dataProps {
    name: string;
    description: string;
    skills: Array<string>;
    link: string;
    image_link?: string;
}

const LIMIT: number = 3;
import fs from "fs";

const getData = (): Array<dataProps> => {
    const file = fs.readFileSync("data/projects.json", { encoding: "ascii" })
    try{
        let fileObj = JSON.parse(file);
        return fileObj;
    }
    catch{
        return [];
    }
}

const Projects = () => {
    let data = getData();
    return (
        <Container>
            <div id="projects" className="flex flex-col justify-center items-left gap-4">
                <h2 className="text-4xl font-bold text-black">
                    Side Projects
                </h2>
                <div className="flex flex-col gap-4 drop-shadow-xl md:flex-row">
                    {data && data.length > 0 ?
                        data.map((project, i) => {
                            if (i < LIMIT) {
                                return (
                                    <div key={`project_${i}`} className="flex flex-col gap-7 flex-grow md:w-[33%] md:aspect-square">

                                        <ProjectCard
                                            name={project.name}
                                            description={project.description}
                                            skills={project.skills}
                                            link={project.link}
                                        />
                                    </div>
                                )
                            }
                        })
                        :
                        <div className="text-black">
                            More to come..
                        </div>
                    }
                </div>

                {
                    data && (data.length > LIMIT) &&
                    <div className="flex flex-col items-center">
                        <MainButton text="Show more" url="/" />
                    </div>
                }
            </div>
        </Container>
    )
}

export default Projects;