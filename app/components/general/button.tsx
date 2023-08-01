import React from "react";
import Link from "next/link";

interface props {
    text : string;
    url?: string;
}

const MainButton = ({text, url}: props) => {
    return (
        <button className = "px-8 py-4 bg-tertiary ">
            <p className = "text-white font-bold text-base">
                {text.toUpperCase()}
            </p>
        </button>
    )
}

export default MainButton;