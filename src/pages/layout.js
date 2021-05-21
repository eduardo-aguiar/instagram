import Header from "../components/header"
import Footer from "../components/footer"
import Cards from "../components/cards"
import Card from "./tailwindyt"

//https://www.youtube.com/watch?v=CKDkb_x3Ssw
const LandingPage = ({
    heading,
    ...ohterProps

}) => {
    return (
            <div className="min-h-full bg-gray-100 font-body">
                <div className=" flex flex-col" style={{height: "872px"}}>


                    <div className="
                        relative h-full
                        bg-cover bg-center bg-fixed bg-no-repeat z-10 
                        " 
                        style={{
                            backgroundImage: `url(./hero.jpg)`
                        }}>

                        <Header className=""/>
                        
                        <div className="flex items-center justify-center my-auto">
                            <div className="md:my-28 my-8 flex flex-col max-w-lg items-center p-2">
                                <h1 className="
                                        relative px-2.5 m-auto text-white uppercase z-10 text-5xl text-center md:text-6xl mb-3 font-bold opacity-80
                                        ">
                                            Construa com <i className="font-serif ">Design</i>
                                </h1>
                                <h1 className="
                                        relative px-2.5 mt-2 text-white z-10 text-4xl text-center md:text-4xl shadow italic
                                        ">
                                            Bamboo pré moldado facilidade e acabamento consulte preços ou <br></br>entre em contato   
                                </h1>
                               
                                <CmButton >Bamboozifique-Se</CmButton>
                            </div>

                            {/*Background color back with opacity */}
                            <div className="
                                    z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-50 
                                    "> 
                            </div>

                        </div>    
                    </div>

                </div>

                <div className="flex flex-row flex-wrap justify-between sm:items-center max-w-screen-2xl mx-auto">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Footer/>
            </div>
    )
}

const CmButton = ({
    ...otherProps
}) =>{
    return (
        <div className="flex z-10 justify-center w-full pt-12 px-2 rounded-full ">
            <div className="bg-green-600 rounded-full py-4 px-6 uppercase text-lg text-white font-bold cursor-pointer ml-3 bg-opacity-90 hover:bg-opacity-100 hover:bg-green-800 focus:bg-green-800
        "><p className="py-0.5">{otherProps.children}</p></div>
        </div>
    )
}



export default LandingPage;