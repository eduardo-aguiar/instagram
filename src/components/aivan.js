import { Link } from "react-router-dom"

const Aivan = () => {
    return (
        <div className="flex flex-wrap py-14 justify-center">
            <div className="
                                    z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-50 
                                    "> 
                            </div>

            <div className="flex flex-col mt-24 w-64 p-3 bg-gray-200 z-10">
                <h1 className="p-2">
                    Você tem 2 metros ou mais de altura? Se assemelha a um bambu? Famoso Vara pau?
                </h1>

                <Link to="/layout" className="bg-green-600 rounded-full py-1 px-2 text-center uppercase text-lg text-white font-bold cursor-pointer bg-opacity-90 hover:bg-opacity-100 hover:bg-green-800 focus:bg-green-800" replace >
                    Sim
                </Link>
            </div>
            
        </div>
    )
}

export default Aivan