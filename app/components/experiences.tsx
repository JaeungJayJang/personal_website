import React from "react";

import CompanyCard from "./general/company";
import Container from "./general/container"

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
        // <div className="relative flex p-4 justify-center bg-primary z-0">
        //     <div className="flex flex-col justify-center h-full py-16 max-w-screen-lg text-white">
        <Container color="bg-primary">
            <div id="experiences" className="flex flex-col justify-center items-left gap-4">
                <h2 className="text-4xl font-bold">Companies I have worked with</h2>
                <div className="flex flex-col gap-4 drop-shadow-xl">
                    {data &&
                        data.map((job, i) => {
                            return (
                                <div key={`experience_${i}`} className="flex flex-col py-4 gap-7">
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
        </Container>
    )
}

export default Experiences;