import { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DownloadResume from "./DownloadResume";
const Hamburger = () => {

  const section0Ref = useRef();
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();

  const scrollToSection = (ref) => {
    setSidebar(!sidebar)
    ref.current.scrollIntoView({ behavior: "smooth" });
  };


  useEffect(() => {
    section0Ref.current = document.getElementById("section0");
    section1Ref.current = document.getElementById("section1");
    section2Ref.current = document.getElementById("section2");
    section3Ref.current = document.getElementById("section3");
    section4Ref.current = document.getElementById("section4");
    section5Ref.current = document.getElementById("section5");
    AOS.init();
  }, []);


  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <>
      <label class="hamburger">
        <input onClick={handleSidebar} checked={sidebar} type="checkbox" />
        <svg viewBox="0 0 32 32">
          <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
          <path class="line" d="M7 16 27 16"></path>
        </svg>
      </label>
      {
        sidebar ? <div className={`sidebar text-center d-lg-none ${sidebar ? 'mounted' : 'demounted'}`} >
          <ul className="navbar-nav me-auto  d-flex flex-column gap-3">
            <li className="nav-item">
              <a
                className="nav-link home"
                onClick={() => scrollToSection(section0Ref)}
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link about"
                onClick={() => scrollToSection(section1Ref)}
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link skills"
                onClick={() => scrollToSection(section2Ref)}
              >
                SKILLS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link projects"
                onClick={() => scrollToSection(section3Ref)}
              >
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link contact"
                onClick={() => scrollToSection(section4Ref)}>CONTACT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"
                onClick={() => scrollToSection(section5Ref)}>GITHUB</a>
            </li>
            <li className="nav-item" >
              <div id="resume-button-1" className="nav-link resume">
                <DownloadResume />
              </div>
            </li>
          </ul>
        </div> : null
      }
    </>
  )
}

export default Hamburger