import CodingFactoryLogo from "./CodingFactoryLogo.tsx";

const Header = () => {
    return (
        <>
            <header className="bg-[#782024] fixed w-full">

                <div className="container mx-auto px-4 flex items-center justify-between">
                    <CodingFactoryLogo/>
                    <a href="/" className="text-white hover:underline hover:underline-offset-4">Home</a>
                </div>

            </header>
        </>
    )
}

export default Header;