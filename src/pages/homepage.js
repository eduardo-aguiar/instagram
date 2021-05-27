import Gallery from "../components/gallery";
import Courses from "../components/courses";
import Products from "../components/products";
import Footer from "../components/footer";

const Homepage = () => {

    return (
        <div className="min-h-screen h-screen">
            <Gallery className="h-2/3 " />
            <Courses/>
            <Products />
            <Footer />
        </div>
    )
}

export default Homepage;