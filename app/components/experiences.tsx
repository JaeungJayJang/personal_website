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

import fs from "fs";

const getData = (): Array<dataProps> => {
    const file = fs.readFileSync("data/experiences.json", { encoding: "ascii" });
    let fileObj = JSON.parse(file);
    return fileObj;
}


const Experiences = () => {
    const data = getData();
    return (
        // <div className="relative flex p-4 justify-center bg-primary z-0">
        //     <div className="flex flex-col justify-center h-full py-16 max-w-screen-lg text-white">
        <Container color="primary">
            <div id="experiences" className="flex flex-col justify-center items-left gap-4">
                <h2 className="text-4xl font-bold">Companies I have worked with</h2>
                <div className="flex flex-col gap-4 drop-shadow-xl">
                    {data &&
                        data.map((experneice, i) => {
                            const startDate = new Date(experneice.start_date)
                            const endDate = experneice.end_date ? new Date(experneice.end_date).getFullYear() : "present".toUpperCase();
                            return (
                                <div key={`experience_${i}`} className="flex flex-col py-4 gap-7">
                                    <p className="pl-4">
                                        {startDate.getFullYear()} - {endDate}
                                    </p>
                                    <CompanyCard
                                        role={experneice.role}
                                        company_name={experneice.company_name}
                                        company_link={experneice.company_link}
                                        start_date={experneice.start_date}
                                        end_date={experneice.end_date}
                                        descriptions={experneice.descriptions}
                                        skills={experneice.skills}
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