import React from "react";

import CompanyCard from "./general/company";

interface dataProps {
    role: string;
    company_name: string;
    company_link: string;
    start_date: Date;
    end_date: Date | undefined;
    descriptions: Array<string>;
    description_long: String;
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
        <div id="experiences" className="h-full bg-background">
            <div className="flex flex-col justify-center items-center gap-4 p-4 bg-background">
                <div className="flex flex-row justify-center h-full py-20 max-w-screen-xl text-white w-full">
                    <div className="w-full flex flex-col gap-4">
                        {data &&
                            data.map((experneice, i) => {
                                const startDate = new Date(experneice.start_date)
                                const endDate = experneice.end_date ? new Date(experneice.end_date).getFullYear() : "present".toUpperCase();

                                return (
                                    <div key={`experience_${i}`} className="flex flex-col lg:flex-row w-full">
                                        <div className="py-4 min-w-[15%]">
                                            <p className="">
                                                {startDate.getFullYear()} - {endDate}
                                            </p>
                                        </div>
                                        <div className="w-full">
                                            <CompanyCard
                                                role={experneice.role}
                                                company_name={experneice.company_name}
                                                company_link={experneice.company_link}
                                                start_date={experneice.start_date}
                                                end_date={experneice.end_date}
                                                descriptions={experneice.descriptions}
                                                description_long={experneice.description_long}
                                                skills={experneice.skills}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences;