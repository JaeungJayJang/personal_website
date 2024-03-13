'use client'

import React from "react";
import Link from "next/link";

interface props {
    text: string;
    url?: string;
    upper?: boolean;
    color?: string;
}

type MainButtonProps = props & React.ButtonHTMLAttributes<HTMLButtonElement>;


const MainButton: React.FC<MainButtonProps>= ({ text, url, upper = true, color, children, ...props }) => {
    if (url) {
        return (
            <Link
                href={url}
            >
                <button className={`group px-8 py-4 bg-tertiary ${color}`} {...props}>
                    <p className="text-white font-bold text-base group-hover:text-secondary">
                        {upper ? text.toUpperCase() : text}
                    </p>
                </button>
            </Link>
        )
    }
    else {
        return (
            <button className={`px-8 py-4 bg-tertiary ${color}`} {...props}>
                <p className="text-white font-bold text-base">
                    {upper ? text.toUpperCase() : text}
                </p>
            </button>
        )
    }
}

export default MainButton;