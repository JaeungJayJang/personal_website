import React from "react";

interface props {
    children: React.ReactNode
}

const Container = ({children}:props) => {
    return (
        <div className="bg-yellow-100 flex justify-center h-screen items-center py-28">
            <div className="lg:container bg-blue-100 h-full">
                {children}
            </div>
        </div>
    )
}

export default Container;