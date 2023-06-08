

const Header = () => {
    return (
        <div className="fixed w-screen top-0 bg-opacity-20 shadow-lg backdrop-blur-md h-16 flex justify-center z-50">
            <div className="container flex justify-between items-center px-8">
                <div className="text-lg">
                    Jaeung.J
                </div>
                <div className="hidden md:flex justify-around w-[400px]">
                    <a role="button" className="btn btn-link" href="#about">{"about".toUpperCase()}</a>
                    <a role="button" className="btn btn-link" href="#experiences" >{"experience".toUpperCase()}</a>
                    <a role="button" className="btn btn-link" href="#projects" >{"projects".toUpperCase()}</a>
                    <a role="button" className="btn btn-link" href="#contact" >{"contact".toUpperCase()}</a>
                </div>
            </div>
        </div>
    )
}

export default Header;