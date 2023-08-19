import React from "react";

interface props {
    children: React.ReactNode
    height?: String
    color?: String
}

const Container = ({children, height = "h-full", color}:props) => {
    let opc_90 = `${color}/90`
    
    let bgColor = "bg-white"
    switch(color){
        case "primary":
            bgColor = `bg-gradient-to-b from-primary to-primary/90`;
            break;
        case "secondary":
            bgColor = `bg-gradient-to-b from-secondary to-secondary/90`;
            break;
        case "tertiary":
            bgColor = `bg-gradient-to-b from-tertiary to-tertiary/90`;
            break;
    }

    return (
        // <div className="bg-yellow-100 flex justify-center h-screen items-center py-28">
        //     <div className="lg:container bg-blue-100 h-full">
        <div className={`flex flex-col justify-center items-center gap-4 p-4 ${height} ${bgColor}`}>
            <div className="flex flex-col justify-center h-full py-16 max-w-screen-lg text-white w-full">
                {children}
            </div>
        </div>
    )
}

export default Container;