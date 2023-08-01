import React from "react";

import CompanyCard from "./general/company";

interface dataProps {
    role: string;
    company_name: string;
    company_link: string;
    start_date: Date;
    end_date: Date | undefined;
    descriptions: Array<string>;
    skills: Array<string>;
}

const data: Array<dataProps> = [
    {
        "role": "Software Engineer",
        "company_name": "BlueSphere Bio",
        "company_link": "https://bluespherebio.com/",
        "start_date": new Date(),
        "end_date": undefined,
        "descriptions": [
            "Designed and implemented an end-to-end workflow monitoring and management application from scratch using Next.js and FastAPI frameworks, providing real-time progress tracking and user permission control for optimized workflow operations.",
            "Orchestrated servers into HPC nodes using Slurm and established centralized user management system with LDAP to provide a tailored server architecture for the team's needs",
            "Built an in-house web application using react CRA, and FastAPI with features including multiple sequence alignment and pairwise alignment for TCR sequence analysis, and PCA, T-SNE, and UMAP for multi-dimensional analysis to support scientists within the company",
        ],
        "skills": [
            "Next.js",
            "FastAPI",
            "Nextflow",
            "React",
            "TypeScript",
            "JavaScript",
            "HPC",
        ]
    },
    {
        "role": "NONE",
        "company_name": "",
        "company_link": "https://bluespherebio.com/",
        "start_date": new Date(),
        "end_date": new Date(),
        "descriptions": [
            "description1",
            "description2",
            "description3",
            "description4",
        ],
        "skills": []
    }
]

const Experiences = () => {
    return (
        <div id="experiences" className="relative flex p-4 justify-center bg-primary z-0">
            <div className="flex flex-col justify-center h-full py-16 max-w-screen-lg text-white">
                <div className="flex flex-col justify-center items-left gap-4">
                    <h2 className="text-4xl font-bold">Companies I have worked with</h2>
                    <div className="flex flex-col gap-4 drop-shadow-xl">
                        {data &&
                            data.map((job, i) => {
                                return (
                                    <div className="flex flex-col py-4 gap-7">
                                        <p className="pl-4">
                                            {job.start_date.getFullYear()} - {job.end_date ? job.end_date.getFullYear() : "present".toUpperCase()}
                                        </p>
                                        <CompanyCard
                                            role={job.role}
                                            company_name={job.company_name}
                                            company_link={job.company_link}
                                            start_date={job.start_date}
                                            end_date={job.end_date}
                                            descriptions={job.descriptions}
                                            skills={job.skills}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        // <div id="experiences" className="relative bg-primary h-auto flex justify-center py-20">
        //     <div className="container h-full px-4 lg:px-64">
        //         <div className="flex flex-col h-full justify-center">
        //             <div className="">
        //                 <h2 className="text-4xl leading-normal font-bold text-white">
        //                     Companies I have worked with
        //                 </h2>
        //             </div>
        //             {
        //                 data &&
        //                 data.map((job, i) => {
        //                     console.log(i)
        //                     return (
        //                         <div className="collapse collapse-open bg-base-200 mb-8">
        //                             <div className="collapse-title text-xl font-medium pr-4">
        //                                 <div className="flex justify-between">
        //                                     <h1>
        //                                         {job.role} @ <a href={job.company_link}>{job.company_name}</a>
        //                                     </h1>
        //                                     <div>
        //                                         {job.start_date.getFullYear()} - {job.end_date ? job.end_date.getFullYear() : "present".toUpperCase()}
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="collapse-content">
        //                                 {
        //                                     job.descriptions.map((description) => {
        //                                         return (
        //                                             <li>
        //                                                 {description}
        //                                             </li>
        //                                         )
        //                                     })
        //                                 }
        //                                 {
        //                                     job.skills &&
        //                                     job.skills.map((skill) => {
        //                                         return (
        //                                             <span className="badge badge-neutral m-[2px] p-3">{skill}</span>
        //                                         )
        //                                     })
        //                                 }
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

export default Experiences;