import { useState } from "react";
import { Link } from "react-router-dom";

const Header2 = ({ ...otherProps }) => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };

  return (
    <header className="z-50 top-0 left-0 relative bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-1.5 mt-1 md:mt-4">
        <Link replace to="/" className="z-10 mx-3 flex group cursor-pointer">
          <span
            className="fa fa-envira fa-4x hidden md:block text-green-400 opacity-70 group-hover:opacity-100 focus:opacity-100"
            aria-hidden="true"
          ></span>
          <span
            className="fa fa-envira fa-2x mr-2 md:hidden text-green-400 opacity-70 group-hover:opacity-100 focus:opacity-100"
            aria-hidden="true"
          ></span>
          <span className="md:hidden text-3xl text-white tracking-widest group-hover:text-green-400 ">
            NL
          </span>
          <span className="hidden md:block text-4xl text-white group-hover:text-green-400 md:mt-3 md:ml-2.5">
            NATIVA LAB
          </span>
        </Link>

        <div
          className="md:hidden uppercase cursor-pointer text-white z-10  hover:text-green-400  hover:opacity-90 mx-3"
          onClick={onClick}
        >
          <i className="fa fa-bars fa-2x mr-2" aria-hidden="true"></i>
        </div>

        <nav
          className={`
                    ${!active && "hidden"}
                    absolute  w-full items-center text-white top-full left-0
                    md:static md:w-auto md:flex-row md:flex bg-transparent z-10
                `}
        >
          <ul className="ml-4 flex flex-col items-center md:flex-row md:flex w-full  ">
            <li className="list-none group flex md:mt-2 items-center mb-3 mr-3 md:mr-5 md:font-bold">
              <i
                className="fa fa-file-text-o md:hidden group-hover:text-green-400"
                aria-hidden="true"
              ></i>
              <Link
                className=" w-full text-opacity-30 uppercase group-hover:text-green-400 cursor-pointer mx-3 mt-2
                        "
              >
                Blog
              </Link>
            </li>

            <li className="list-none md:mr-5 md:mt-2 group flex items-center bg-transparent mb-3 mr-3">
              <i
                className="fa fa-user-circle md:hidden group-hover:text-green-400"
                aria-hidden="true"
              ></i>
              <Link
                className="flex w-full text-base uppercase group-hover:text-green-400 cursor-pointer mx-3 mt-2 md:font-bold 
                        "
              >
                Bio
              </Link>
            </li>
            <li
              className="list-none md:mr-5 md:mt-2 group flex items-center bg-transparent mb-3 mr-3  
                    "
            >
              <i
                className="fa fa-envelope-open-o md:hidden group-hover:text-green-400 "
                aria-hidden="true"
              ></i>
              <Link
                className=" w-full text-base uppercase cursor-pointer group-hover:text-green-400
                            mx-3  mt-2 font-bold
                        "
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header2;
