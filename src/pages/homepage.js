import Gallery from "../components/gallery";
import Courses from "../components/courses";
import Products from "../components/products";
import Footer from "../components/footer";
import Projects from "../components/projects";

const Homepage = () => {
  return (
    <div className="min-h-screen h-screen bg-gray-200">
      <Gallery className="h-2/3 " />
      <Courses />
      <Projects />
      <Products />
      <Footer />
    </div>
  );
};

export default Homepage;
