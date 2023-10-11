
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
import Contact from "./Components/Contact";
import GithubCalendar from "./Components/GithubCalendar";
import Footer from "./Components/Footer";


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div id="section0" className="mainContainer">
        <SpaceBackground />
        <Navbar />
        <br /><br />
        <br /><br />
        {/* Hero Section with profile pic and 2 lines intro */}
        <div className="container-fluid my-5 image-about">
          <div className="row d-flex align-items-center justify-content-around">
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1000"
              id="home"
              className="col-lg-5 col-7 mb-lg-0 mb-5 "
            >
              <ProfilePic />
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1000"
              id="about"
              className="col-lg-5 col-10 mt-lg-0 mt-5 about section"
            >
              <FormalAbout />
            </div>
          </div>
        </div>
        <br /><br /><br id="section1" /><br id="section1" />
        {/* About Section */}
        <div
          id="about"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
          className="container about section aboutme d-flex gap-5 justify-content-center align-items-center"
        >
          <About />
        </div>
        <br /><br /><br /><br id="section2" />
        {/* Skills Section */}
        <div
          className="container d-md-flex gap-md-5 flex-md-column justify-content-center align-items-center"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
          id="skills"
        >
          <Skills />
        </div>
        <SpaceBackground />
        <br /><br /><br /><br id="section3" />
        {/* Projects Section */}
        <div
          className="container "
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
          id="projects"
        >
          <Projects />
        </div>
        <br /><br /><br /><br id="section5" />
        {/* Github Section */}
        <div
          className="container github"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <GithubCalendar />
        </div>
        <br /><br /><br /><br id="section4" />
        {/* Contact Section */}
        <div
          className="container"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
          id="contact"
        >
          <Contact />
        </div>
        <br /><br /><br /><br />
      </div>
      <Footer />
    </>
  );
}

export default App;
