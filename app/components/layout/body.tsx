
interface props {
    children: React.ReactNode
}

const Body = ({children}: props) => {
    return (
        <div className="flex flex-col relative overflow-hidden">
            <div className="relative">
                {children}
            </div>
            <div className="absolute w-[300px] h-full bg-secondary z-[-1] top-[calc(100vh-60px)] left-[calc(50%-150px+400px)]"></div>
        </div>
    )
}

export default Body;