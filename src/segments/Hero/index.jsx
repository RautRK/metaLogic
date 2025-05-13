
import { convertHexToRgba } from "../../utils"
import { Link } from "react-scroll"
import { FaArrowTrendUp } from "react-icons/fa6"
import { FaProjectDiagram } from "react-icons/fa"
import BoxAnimation from "../../assets/BoxAnimation"
import "./Hero.css"
const Hero = () => {
  return (
    <section id="hero">
        <BoxAnimation  />
      <div className="container">
      
        <div>
            <h4 className="text-primary hero-subtitle" style={{background:convertHexToRgba("--primary",0.2)}}>Digital Innovation And Expansion</h4>
            <h1 className="hero-title">Driving Innovations And Empowering business</h1>
            <p className="hero-description">Metalogic envisions a future where technology serves as a catalyst for limitless human potential, fostering innovation and empowering organizations to thrive in a transformative digital era.</p>
        <div className="buttons-wrapper">
            <Link to="contact" smooth={true} className="btn primary">Get Started<FaArrowTrendUp /></Link>
            <Link to="projects" smooth={true} className="btn">See Our Work<FaProjectDiagram /></Link>
        </div>
        </div>
             </div>
    </section>
  )
}

export default Hero
