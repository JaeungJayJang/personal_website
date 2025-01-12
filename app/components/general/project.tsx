import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

interface dataProps {
    name: string;
    description: string;
    skills: Array<string>;
    link?: string;
}

const ProjectCardInner = ({ name, description, skills, link }: dataProps) => {
    return (
        <>
            <div className={`flex justify-start w-full items-center gap-2 ${link && "group-hover:text-secondary"} transition-all`}>
                <h1 className="text-xl font-semibold uppercase">
                    {name}
                </h1>
                {link &&
                    <FaExternalLinkAlt />
                }
            </div>
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
                                // <div key={`skill_${i}`} className="bg-secondary rounded-full px-3 text-center bg-opacity-70">{skill}</div>
                                <div key={`skill_${i}`} className="text-secondary">{skill}</div>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}

const ProjectCard = ({ name, description, skills, link }: dataProps) => {
    if (link) {
        return (
            <Link href={`${link ? link : ""}`} className="transition-all group relative flex flex-col justify-center items-start p-4 gap-3 hover:bg-white hover:bg-opacity-5 text-white md:justify-start md:h-full rounded-md border-[1px] border-slate-200">
                <ProjectCardInner
                    name={name}
                    description={description}
                    skills={skills}
                    link={link}
                />
            </Link>
        )
    }
    else {
        return (
            <div className="group relative flex flex-col justify-center items-start p-4 gap-3 bg-tertiary text-white md:justify-start md:h-full">
                <ProjectCardInner
                    name={name}
                    description={description}
                    skills={skills}
                />
            </div>
        )
    }
}

export default ProjectCard;