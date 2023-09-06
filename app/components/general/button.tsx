import React from "react";
import Link from "next/link";


interface props {
    text: string;
    url?: string;
    upper?: boolean;
    color?: string;
}

const MainButton = ({ text, url, upper = true }: props) => {
    if (url) {
        return (
            <Link
                href={url}
            >
                <button className="group px-8 py-4 bg-tertiary">
                    <p className="text-white font-bold text-base group-hover:text-secondary">
                        {upper ? text.toUpperCase() : text}
                    </p>
                </button>
            </Link>
        )
    }
    else {
        return (
            <button className="px-8 py-4 bg-tertiary ">
                <p className="text-white font-bold text-base">
                    {upper ? text.toUpperCase() : text}
                </p>
            </button>
        )
    }
}

export default MainButton;