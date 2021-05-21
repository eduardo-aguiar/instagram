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
        <header className="bg-transparent relative bg-gray-900 bg-opacity-30">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5">
            <div className="z-10 mx-3 flex flex-grow group">
                 <span className="fa fa-envira fa-4x text-green-400 opacity-70 cursor-pointer hover:opacity-100" aria-hidden="true"></span>
                 <span className="md:hidden text-4xl font-bold text-white my-3 tracking-widest group-hover:text-green-400 ">NL</span>
                 <span className="hidden md:block text-4xl font-bold text-white my-3 group-hover:text-green-400">NATIVE LAB</span>
            </div>

            <div className="md:hidden uppercase cursor-pointer text-white z-10  hover:text-green-400  hover:opacity-90 mx-3" 
            onClick={onClick}>
                <i className="fa fa-bars fa-3x" aria-hidden="true"></i>
            </div>

            <nav
                className={`
                    ${!active && "hidden"}
                    absolute flex w-full flex-col items-center text-white top-full left-0 z-20
                    md:static md:w-auto md:flex-row md:flex bg-gray-900 bg-opacity-30 md:bg-transparent
                `}
            >
                <ul className="ml-4 md:flex-row md:flex w-full flex-wrap font-bold bg-transparent ">
                   
                    <li className="list-none md:mr-5 group flex md:mt-2 items-center bg-transparent mb-3 mr-3">
                         <i className="fa fa-file-text-o md:hidden group-hover:text-green-400" aria-hidden="true"></i>
                        <Link className="flex w-full text-base uppercase group-hover:text-green-400 cursor-pointer mx-3 mt-2
                        ">
                            Blog
                        </Link>
                    </li>

                    <li className="list-none md:mr-5 md:mt-2 group flex items-center bg-transparent mb-3 mr-3">
                    
                        <i className="fa fa-user-circle md:hidden group-hover:text-green-400" aria-hidden="true"></i>
                        <Link className="flex w-full text-base uppercase group-hover:text-green-400 cursor-pointer mx-3 mt-2 
                        ">
                            Bio
                        </Link>
                    </li>
                    <li className="list-none md:mr-5 md:mt-2 group flex items-center bg-transparent mb-3 mr-3
                    ">
                        <i className="fa fa-envelope-open-o md:hidden group-hover:text-green-400 " aria-hidden="true"></i>
                        <Link className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer group-hover:text-green-400
                            mx-3  mt-2
                        ">
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header;