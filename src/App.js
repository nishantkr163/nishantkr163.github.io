
import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import ProfilePic from "./Components/ProfilePic";
import FormalAbout from "./Components/FormalAbout";
import { Skills } from "./Components/Skills";
import Projects from "./Components/Projects";
import SpaceBackground from "./Components/SpaceBackground";


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="section0" className="mainContainer">
      <SpaceBackground />
      <Navbar />
      <br /><br />
      <div className="container-fluid my-5 image-about">
        <div className="row d-flex align-items-center justify-content-around">
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="col-lg-5 col-7 mb-lg-0 mb-5 "
          >
            <ProfilePic />
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="col-lg-5 col-10 mt-lg-0 mt-5 about"
          >
            <FormalAbout />
          </div>
        </div>
      </div>
      <br/><br /><br id="section1" /><br id="section1" />
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
        className="container aboutme d-flex gap-5 justify-content-center align-items-center"
      >
        <About />
      </div>
      <br /><br /><br /><br id="section2" />
      <div 
        className="container skills d-md-flex gap-md-5 flex-md-column justify-content-center align-items-center"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
        
      >
        <Skills />
      </div>
      <br /><br /><br /><br id="section3" />
      <div 
        className="container  projects"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <Projects />
      </div>
    </div>
  );
}

export default App;
