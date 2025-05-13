
import About from "./segments/About";
import Achievement from "./segments/Achievement";
import Hero from "./segments/Hero";
import Navbar from "./segments/Navbar/Navbar";
import Portfolio from "./segments/Portfolio";
import Service from "./segments/Services";
import "swiper/css";
import Testimonial from "./segments/Testimonials";
import Contact from "./segments/Contact";
import Blog from "./segments/Blog";
import Footer from "./segments/Footer";
function App() {
  return (
     <>
     <Navbar />
     <Hero />
     <Achievement />
     <About />
     <Service />
     <Portfolio />
     <Testimonial />
     <Contact />
     <Blog />
     <Footer />
     </>
  );
}

export default App;
