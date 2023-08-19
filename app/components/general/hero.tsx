import React from "react";

import MainButton from "./button";

const BlueSphereBio = () => {

    return (
        <a className="inline-block text-red-400" href="https://bluespherebio.com/" target="_black">
            BlueSphere Bio
        </a>
    )
}

const Hero = () => {
    return (
        <div id="hero" className="relative flex flex-col justify-center items-start px-4 md:px-12 py-12 gap-3 bg-primary leading-normal text-white">
            <div className="flex">
                <div className="flex flex-col items-start gap-3 sm:w-3/6 md:w-4/6">
                    <h2 className="text-base">
                        Hello, my name is
                    </h2>
                    <h1 className="text-5xl font-bold text-secondary">
                        Jaeung Jang
                    </h1>
                    <p className=" text-base">
                        I&apos;m a software engineer specialized in increasing efficiency and automating process.
                        I am currently working on buidling high-performance workflow management tools at <BlueSphereBio />.
                    </p>
                    <MainButton text="Resume"/>
                </div>
                <div className="absolute bottom-0 right-0 hidden sm:block sm:w-3/6 md:w-2/6 h-[calc(100%+32px)] pl-4 pr-8 pb-8">
                    <div className="bg-gray-400 w-full h-full"/>
                </div>
            </div>
            <div className="absolute w-[200px] h-[100px] bg-secondary -bottom-4 -left-4 z-[-1]"></div>
        </div>
    )
}

export default Hero;