

interface CustomNavProps {
    href: string
    text: string
}

const CustomNav = ({href, text}:CustomNavProps) => {
    return (
        <a role="button" className="btn btn-link no-underline text-black hover:text-secondary hover:no-underline hover:text-lg hover: opacity-" href={href}>
            <p className="text-md font-bold">{text}</p>
        </a>
    )
}

const Header = () => {
    return (
        <div className="fixed w-screen top-0 bg-white bg-opacity-25 shadow-sm backdrop-blur-sm h-16 flex justify-center z-50 border-b">
            <div className="container flex justify-between items-center px-4 md:px-8">
                <div className="text-xl text-secondary font-bold md:text-3xl">
                    Jaeung.J
                </div>
                <div className="hidden md:flex justify-around w-[400px]">
                    <CustomNav href="#about" text={"about".toUpperCase()}/>
                    <CustomNav href="#experiences" text={"experiences".toUpperCase()}/>
                    <CustomNav href="#projects" text={"projects".toUpperCase()}/>
                    <CustomNav href="#contact" text={"contact".toUpperCase()}/>
                </div>
            </div>
        </div>
    )
}

export default Header;