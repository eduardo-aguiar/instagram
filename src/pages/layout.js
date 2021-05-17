import Header from "../components/header"
import Footer from "../components/footer"
import Cards from "../components/cards"

//https://www.youtube.com/watch?v=CKDkb_x3Ssw
const LandingPage = ({
    heading,
    ...ohterProps

}) => {
    return (
        <div className="min-h-full bg-gray-100 font-body">
            <div className="h-screen flex flex-col">

                <Header />

                <div className="
                relative flex items-center justify-center h-full
                bg-cover bg-center bg-fixed bg-no-repeat
                " 
                style={{
                    backgroundImage: `url(./hero.jpg)`
                }}>

                {heading && <h1 className="
                    relative px-2.5 text-white uppercase z-10 text-xl text-center md:text-6xl   
                ">{heading}</h1>} 

                <div
                    className="
                       z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-40  
                    "
                ></div>

                </div>

            </div>

            <div
                className="w-full max-w-7xl mx-auto"
            >
                {ohterProps.children}
                <Cards />
            </div>
            <Footer/>
        </div>
    )
}

LandingPage.defaultProps ={
    heading: 'native lab'
};

export default LandingPage;