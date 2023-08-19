import React from "react";

import Container from "./general/container";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";


const GITHUB_LINK = "https://github.com/qmffkem";
const LINKED_LINK = "https://www.linkedin.com/in/jaeung-jang/";

const Contact = () => {
    return (
        // <div className="flex flex-col justify-center bg-primary items-center gap-4 p-4">
        //     <div className="flex flex-col justify-center h-full py-16 max-w-screen-lg text-white">
        <Container color="primary">
            <div id="contact" className="flex flex-col justify-center items-center text-center gap-4">
                <h2 className="text-4xl font-bold uppercase">
                    Let&apos;s Connect!
                </h2>
                <p className="">
                    I would love to talk about my work or anything related to technology. Whether you are looking for someone to talk with, or have a question about me or my works, feel free to reach out to me with some of the methods below!
                </p>
                <div className="flex justify-around h-full items-center">
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
                    <div></div>
                </div>
            </div>
        </Container>
    )
}

export default Contact;