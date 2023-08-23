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
            <div className="md:flex-grow w-full">
                <p style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 5,
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                }}>
                    {description}
                </p>
            </div>
            <div className="flex gap-3 flex-wrap md:overflow-auto">
                {
                    skills &&
                    skills.map((skill, i) => {
                        if (i < 3) {
                            return (
                                <div key={`skill_${i}`} className="bg-secondary rounded-full px-3 text-center text-black">{skill}</div>
                            )
                        }
                    })
                }
            </div>

        </div>
    )
}

export default ProjectCard;