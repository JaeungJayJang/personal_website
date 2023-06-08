
import { FaLinkedinIn, FaGithub } from "react-icons/fa";


const GITHUB_LINK = "https://github.com/qmffkem";
const LINKED_LINK = "https://www.linkedin.com/in/jaeung-jang/";


const BlueSphereBio = () => {

    return (
        <a className="inline-block text-red-400" href="https://bluespherebio.com/" target="_black">
            BlueSphere Bio
        </a>
    )
}

const About = () => {

    return (
        <div id="about" className="relative w-screen h-screen flex justify-center py-20">
            <div className="container h-full px-4 xl:px-40 items-center">
                <div className="flex flex-col h-full justify-center">
                    <div className="relative">
                        <div className="flex flex-col bg-primary px-4 lg:px-8 py-8 lg:py-16">

                            {/* mobile display for portrait */}
                            {/* <div className="lg:hidden bg-gray-400 w-full h-[400px]" /> */}

                            <div className="">
                                <h2 className="text-lg">
                                    Hello, my name is
                                </h2>
                            </div>
                            <div className="">
                                <h1 className="text-7xl leading-normal font-bold">
                                    Jaeung Jang
                                </h1>
                            </div>
                            <div className="max-w-md">
                                <p className="leading-normal">
                                    I'm a software engineer specialized in increasing efficiency and automating process.
                                    I am currently working on buidling high-performance workflow management tools at <BlueSphereBio />.
                                </p>
                            </div>
                            <div className="space-x-3 m-2">
                                <a href={GITHUB_LINK}>
                                    <button className="btn btn-square">
                                        <FaGithub />
                                    </button>
                                </a>
                                <a href={LINKED_LINK}>
                                    <button className="btn btn-square">
                                        <FaLinkedinIn />
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="absolute bg-secondary w-3/6 h-3/6 -left-[20px] -bottom-[20px] z-[-1]">
                        </div>
                        <div className="absolute bg-gray-400 lg:w-2/6 h-full m-[40px] right-0 bottom-0 z-1">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;



/**
 * 
 *                     <div className="">
                        <h2 className="text-lg">
                            Hello, my name is
                        </h2>
                    </div>
                    <div className="">
                        <h1 className="text-7xl leading-normal font-bold">
                            Jaeung Jang
                        </h1>
                    </div>
                    <div className="max-w-md">
                        <p className="leading-normal">
                            I'm a software engineer specialized in increasing efficiency and automating process.
                            I am currently working on buidling high-performance workflow management tools at <BlueSphereBio />.
                        </p>
                    </div>
                    <div className="space-x-3 m-2">
                        <a href={GITHUB_LINK}>
                            <button className="btn btn-square">
                                <FaGithub />
                            </button>
                        </a>
                        <a href={LINKED_LINK}>
                            <button className="btn btn-square">
                                <FaLinkedinIn />
                            </button>
                        </a>
                    </div>

 * 
 * 
 *  */ 
