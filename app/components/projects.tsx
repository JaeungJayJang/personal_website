import React from "react";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
    const directory = path.join(process.cwd(), "data")
    const allProjects =  fs.readFileSync(directory + "/projects.json", "utf8");
    
    return {
        props: {
            allProjects
        }
    }
}


import ProjectCard from "./general/project";
import MainButton from "./general/button";
import Container from "./general/container";



interface dataProps {
    name: string;
    desciprion: string;
    skills: Array<string>;
    link: string;
    image_link?: string;
}

const LIMIT: number = 3;
const data: Array<dataProps> = [
    {
        "name": "project name",
        "desciprion": `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.`,
        "skills": [
            "Next.js",
            "FastAPI",
            "Nextflow",
            "React",
            "TypeScript",
            "JavaScript",
            "HPC",
        ],
        "link": "",
        "image_link": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    },
    {
        "name": "project name",
        "desciprion": "a brief description about what the project is",
        "skills": [
            "Next.js",
            "FastAPI",
            "Nextflow",
            "React",
            "TypeScript",
            "JavaScript",
            "HPC",
        ],
        "link": "",
        "image_link": "https://www.veryicon.com/download/png/emoticon/number-1/20-5?s=256",
    },
    {
        "name": "project name",
        "desciprion": "a brief description about what the project is",
        "skills": [
            "Next.js",
            "FastAPI",
            "Nextflow",
            "React",
            "TypeScript",
            "JavaScript",
            "HPC",
        ],
        "link": "",
        "image_link": "https://www.shutterstock.com/image-vector/blue-horizontal-lens-flares-pack-260nw-2202148279.jpg",
    },
]

const Projects = () => {


    return (
        // <div className="flex flex-col justify-center items-center gap-4 p-4">
        //     <div className="flex flex-col justify-center h-full py-16 max-w-screen-lg text-white">
        <Container>
            <div id="projects" className="flex flex-col justify-center items-left gap-4">
                <h2 className="text-4xl font-bold text-black">Side Projects</h2>
                <div className="flex flex-col gap-4 drop-shadow-xl">
                    {data &&
                        data.map((job, i) => {
                            if (i < LIMIT) {
                                return (
                                    <div key={`project_${i}`} className="flex flex-col gap-7">

                                        <ProjectCard
                                            name={job.name}
                                            description={job.desciprion}
                                            skills={job.skills}
                                            link={job.link}
                                        />
                                    </div>
                                )
                            }
                        })
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