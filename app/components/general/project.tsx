import React from "react";

interface dataProps {
    name: string;
    description: string;
    skills: Array<string>;
    link: string;
}


const ProjectCard = ({ name, description, skills, link }: dataProps) => {
    return (
        <div className="relative flex flex-col justify-center items-start p-4 gap-3 bg-tertiary text-white md:justify-start md:h-full">
            <h1 className="text-2xl font-bold uppercase">
                {name}
            </h1>
            <p className="md:flex-grow md:overflow-auto">
                {description}
            </p>
            <div className="flex gap-3 flex-wrap md:overflow-auto">
                {
                    skills &&
                    skills.map((skill, i) => {
                        return (
                            <div key={`skill_${i}`} className="bg-secondary rounded-full px-3 text-center text-black">{skill}</div>
                            // <span className="m-[2px] p-3">{skill}</span>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ProjectCard;