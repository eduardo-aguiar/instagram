import { useState } from "react";
import { Link } from "react-router-dom"

const Header = ({
    ...otherProps
}) => {
    const [active, setActive] = useState(false);

    const onClick = () => {
        setActive(!active);
    }

    return (
        <header className="bg-white relative">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5">
            <div>
                <img src="images/logo.png" className="w-full"/>
            </div>

            <div className="md:hidden uppercase " 
            onClick={onClick}>
                Menu
            </div>

            <nav
                className={`
                    ${!active && "hidden"}
                    absolute flex flex-col bg-white top-full w-full left-0 z-20
                    md:static md:w-auto md:flex-row md:flex 
                `}
            >
                <ul className="md:flex-row md:flex">
                    <li className="list-none md:mr-5">
                        <Link className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer
                            pt-2.5 px-2.5
                        ">
                            Home
                        </Link>
                    </li>
                    <li className="list-none md:mr-5">
                        <Link className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer
                            pt-2.5 px-2.5
                        ">
                            Home
                        </Link>
                    </li>
                    <li className="list-none md:mr-5">
                        <Link className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer
                            pt-2.5 px-2.5
                        ">
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header;