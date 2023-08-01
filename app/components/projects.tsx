import React from "react";

import ProjectCard from "./general/project";
import MainButton from "./general/button";

interface dataProps {
    name: string;
    desciprion: string;
    skills: Array<string>;
    link: string;
    image_link?: string;
}

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
        <div id="projects" className="flex flex-col justify-center items-center gap-4 p-4">
            <div className="flex flex-col justify-center h-full py-16 max-w-screen-lg text-white">
                <div className="flex flex-col justify-center items-left gap-4">
                    <h2 className="text-4xl font-bold text-black">Side Projects</h2>
                    <div className="flex flex-col gap-4 drop-shadow-xl">
                        {data &&
                            data.map((job, i) => {
                                return (
                                    <div className="flex flex-col gap-7">

                                        <ProjectCard
                                            name={job.name}
                                            description={job.desciprion}
                                            skills={job.skills}
                                            link={job.link}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-col items-center">
                        <MainButton text="Show more" url="/" />
                    </div>
                </div>
            </div>
        </div>

        // <div id="projects" className="h-auto flex justify-center py-20">
        //     <div className="container h-full px-4 lg:px-64">
        //         <div className="flex flex-col h-full justify-center">
        //             <div className="">
        //                 <h2 className="text-4xl leading-normal font-bold">
        //                     Side Projects
        //                 </h2>
        //             </div>
        //             {
        //                 data &&
        //                 data.map((project, i) => {
        //                     return (
        //                         <div className="card md:card-side bg-base-100 shadow-xl mb-8">
        //                             <figure className="md:w-2/6 md:h-[200px]">
        //                                 <img src={project.image_link} alt="Album" />
        //                             </figure>
        //                             <div className="card-body">
        //                                 <h2 className="card-title">{project.name}</h2>
        //                                 <p>{project.desciprion}</p>
        //                                 <div>
        //                                     {
        //                                         project.skills &&
        //                                         project.skills.map((skill) => {
        //                                             return (
        //                                                 <span className="badge badge-neutral m-[2px] p-3">{skill}</span>
        //                                             )
        //                                         })
        //                                     }
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     )
        //                 })
        //             }
        //         </div>
        //     </div>
        // </div>

    )
}

export default Projects;