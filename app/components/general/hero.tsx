import React from "react";

import MainButton from "./button";
import Image from "next/image";

interface aboutProps {
    name: string;
    description: string;
}

import fs from "fs";

const getData = (): aboutProps => {
    const file = fs.readFileSync("data/about.json", { encoding: "ascii" })
    let fileObj = JSON.parse(file);
    return fileObj;
}

const getPortrait = () => {
    const file = fs.readFileSync("public/portrait.jpeg", { encoding: "base64" })
    return file
}

const LINKEDIN_LINK = "https://www.linkedin.com/in/jaeung-jang/"

const Hero = () => {
    const data = getData();
    const portraitImage = getPortrait();

    return (
        <div id="hero" className="relative flex flex-col justify-center items-start px-4 md:px-12 py-12 gap-3 bg-primary-90 leading-normal text-white">
            <div className="flex">
                <div className="flex flex-col items-start gap-3 sm:w-3/6 md:w-4/6">
                    <h2 className="text-base">
                        Hello, my name is
                    </h2>
                    <h1 className="text-5xl font-bold text-secondary">
                        {data.name}
                    </h1>
                    <p className=" text-base">
                        {data.description}
                    </p>
                    <MainButton text="LinkedIn" url={LINKEDIN_LINK} upper={false} />
                </div>
                <div className="absolute bottom-0 right-0 hidden sm:block sm:w-3/6 md:w-2/6 h-[calc(100%+32px)] pl-4 pr-8 pb-8">
                    <div className="relative bg-secondary w-full h-full overflow-hidden">
                        <Image
                            fill
                            src={`data:image/png;base64,${portraitImage}`}
                            alt="portrait image"
                            style={{ objectFit: "cover" }}
                        />
                    </div>

                </div>
            </div>
            <div className="absolute w-[200px] h-[100px] bg-secondary -bottom-4 -left-4 z-[-1]"></div>
        </div>
    )
}

export default Hero;