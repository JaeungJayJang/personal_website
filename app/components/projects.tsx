import React from "react";

import ProjectCard from "./general/project";
import LoadMoreButton from "./general/load_more_button";

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
    try {
        let fileObj = JSON.parse(file);
        return fileObj;
    }
    catch {
        return [];
    }
}

const Projects = () => {
    let data = getData();

    return (
        <div id="projects" className="h-full bg-background">
            <div className="flex flex-col justify-center items-center gap-4 p-4 bg-background">
                <div className="flex flex-row justify-center h-full py-20 max-w-screen-xl text-white w-full">
                    <div className="w-full flex flex-col gap-4">
                        <h2 className="text-3xl font-semibold">
                            Side Projects
                        </h2>
                        <div className="flex flex-col gap-4 drop-shadow-xl lg:flex-row md:grid md:grid-cols-3 lg:grid-cols-4">
                            {data && data.length > 0 ?
                                data.map((project, i) => {
                                    return (
                                        <div key={`project_${i}`} className="flex flex-col gap-7 lg:flex lg:aspect-square flex-grow">

                                            <ProjectCard
                                                name={project.name}
                                                description={project.description}
                                                skills={project.skills}
                                                link={project.link}
                                            />
                                        </div>
                                    )
                                })
                                :
                                <div className="text-black">
                                    More to come..
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;