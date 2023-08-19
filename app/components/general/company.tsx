import React from "react";

export interface dataProps {
    role: string;
    company_name: string;
    company_link: string;
    start_date: Date;
    end_date: Date | undefined;
    descriptions: Array<string>;
    skills: Array<string>;
}


const CompanyCard = ({ role, company_name, company_link, descriptions }: dataProps) => {
    return (
        <div className="relative flex flex-col justify-center items-start p-4 gap-3 bg-tertiary text-white">
            <h1 className="text-xl font-bold uppercase">
                {role}
                <a className="text-secondary" href={company_link}> @ {company_name}</a>
            </h1>
            <ul className="flex flex-col list-disc pl-4 gap-3">
                {
                    descriptions &&
                    descriptions.map((description, i) => {
                        return (
                            <li className="" key={`description_${i}`}>
                                {description}
                            </li>
                        )
                    })
                }
            </ul>
            <div className="absolute w-[200px] h-[100px] bg-secondary -top-4 -left-4 z-[-1]"></div>
            <div className="absolute w-[200px] h-[100px] bg-secondary -bottom-4 -right-4 z-[-1]"></div>
        </div>
    )
}

export default CompanyCard;