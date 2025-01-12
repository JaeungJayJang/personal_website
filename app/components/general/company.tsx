import React from "react";

export interface dataProps {
    role: string;
    company_name: string;
    company_link: string;
    start_date: Date;
    end_date: Date | undefined;
    descriptions: Array<string>;
    description_long: String;
    skills: Array<string>;
}


const CompanyCard = ({ role, company_name, company_link, descriptions, description_long}: dataProps) => {
    return (
        <div className="relative flex flex-col justify-center items-start p-8 gap-3 text-white rounded-md hover:bg-white hover:bg-opacity-5 transition-colors">
            <h1 className="text-xl font-bold uppercase">
                {role}
                <a className="text-secondary" href={company_link}> @ {company_name}</a>
            </h1>
            <ul className="flex flex-col list-disc gap-3">
                <p className="">
                    {description_long}
                </p>
            </ul>
        </div>
    )
}

export default CompanyCard;