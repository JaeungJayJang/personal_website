import React from "react";

interface props {
    children: React.ReactNode
    height?: String
    color?: String
}

const Container = ({children, height, color}:props) => {
    return (
        // <div className="bg-yellow-100 flex justify-center h-screen items-center py-28">
        //     <div className="lg:container bg-blue-100 h-full">
        <div className={`flex flex-col justify-center items-center gap-4 p-4 ${height} ${color}`}>
            <div className="flex flex-col justify-center h-full py-16 max-w-screen-lg text-white">
                {children}
            </div>
        </div>
    )
}

export default Container;