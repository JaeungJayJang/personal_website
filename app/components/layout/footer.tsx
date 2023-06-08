
import { FaLinkedinIn, FaGithub } from "react-icons/fa";


const GITHUB_LINK = "https://github.com/qmffkem";
const LINKED_LINK = "https://www.linkedin.com/in/jaeung-jang/";

const Footer = () => {
    return (
        <div className="h-32 flex justify-center">
            <div className="lg:container h-full">
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
        </div>
    )
}

export default Footer;