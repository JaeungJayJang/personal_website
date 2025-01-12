'use client';

import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface CustomNavProps {
    href: string
    text: string
}

const CustomNav = ({ href, text }: CustomNavProps) => {
    return (
        <a role="button" className="transition-all btn btn-link no-underline text-black hover:text-secondary hover:no-underline hover: opacity-" href={href}>
            <p className="text-md font-bold">{text}</p>
        </a>
    )
}

function test() {

}

const Header = () => {
    const [mobileNavCheck, setMobileNavCheck] = useState<boolean>(false);

    useEffect(() => {
        console.log("clicked")
    }, [mobileNavCheck])

    return (
        <div className="fixed z-50">
            <div className="sticky w-screen top-0 bg-white h-16 flex justify-center border-b ">
                <div className="container flex justify-between items-center px-4 md:px-8">
                    <div className="text-xl text-secondary font-bold md:text-3xl">
                        <a href="/#">
                            Jaeung.J
                        </a>
                    </div>
                    <div className="hidden md:flex justify-around w-[400px]">
                        <CustomNav href="/#about" text={"about".toUpperCase()} />
                        <CustomNav href="/#experiences" text={"experiences".toUpperCase()} />
                        <CustomNav href="/#projects" text={"projects".toUpperCase()} />
                        <CustomNav href="/#contact" text={"contact".toUpperCase()} />
                    </div>
                    <div className="md:hidden" onClick={() => setMobileNavCheck(prevState => !prevState)}>
                        <GiHamburgerMenu />
                    </div>
                </div>
            </div>
            {
                mobileNavCheck &&
                <div className="md:hidden flex flex-col sticky w-screen top-16 bg-white border-b" onClick={() => setMobileNavCheck(prevState => !prevState)}>
                    <CustomNav href="/#about" text={"about".toUpperCase()}/>
                    <CustomNav href="/#experiences" text={"experiences".toUpperCase()} />
                    <CustomNav href="/#projects" text={"projects".toUpperCase()} />
                    <CustomNav href="/#contact" text={"contact".toUpperCase()} />
                </div>
            }
        </div>
    )
}

export default Header;