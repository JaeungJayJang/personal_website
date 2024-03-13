"use client"

import React from "react";
import MainButton from "./button";

const LoadMoreButton = () => {

    const handleClick = () => {
        
    }

    return (
        <div className="flex flex-col items-center">
            <MainButton text="Show more" onClick={() => handleClick()}/>
        </div>
    )
}

export default LoadMoreButton;