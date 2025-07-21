function Navbar() {
    return (
        <nav className="w-full flex justify-around items-center h-[110px] px-5">
            <div className="w-1/5">
                <h1 className="font-bold text-4xl font-achiko text-blue-700">ChopLink.</h1>
            </div>
            <div className="justify-around flex">
                <a href="" className="titillium-web-regular text-lg hover-bold active:scale-90 mx-5">Home</a>
                <a href="" className="titillium-web-regular text-lg hover-bold active:scale-90 mx-5">About the Project</a>
            </div>
        </nav>
    )
}

export default Navbar