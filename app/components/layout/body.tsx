
interface props {
    children: React.ReactNode
}

const Body = ({children}: props) => {
    return (
        <div className="relative">
            {children}
        </div>
    )
}

export default Body;