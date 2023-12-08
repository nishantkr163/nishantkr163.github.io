import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import Hamburger from "./Hamburger";
import DownloadResume from "./DownloadResume";
import Nishant_Kumar_Singh_Resume from "../Resume/Nishant_Kumar_Singh_Resume.pdf";

const Navbar = () => {
  const section0Ref = useRef();
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();

  const scrollToSection = (ref) => {
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

  return (
    <nav
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-duration="1000"
      id="nav-menu"
      className="navbar  navbar-expand-lg  pt-4 pb-3 px-2 "
    >
      <div className="container-fluid d-flex align-items-center">
        <a>
          <h1 className="name">
            Nishant{" "}
            <span className="name pt-5" style={{ color: "#006AFF" }}>
              Singh
            </span>
          </h1>
        </a>
        <div className="d-lg-none d-flex">
          <Hamburger />
        </div>
      </div>
      <div className=" px-4 d-lg-flex d-none align-items-center">
        <ul className="navbar-nav me-auto gap-lg-3 mb-2 mb-lg-0">
          <li className="nav-item">
            <a
              className="nav-link pt-3 home"
              onClick={() => scrollToSection(section0Ref)}
            >
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link pt-3 about"
              onClick={() => scrollToSection(section1Ref)}
            >
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link pt-3 skills"
              onClick={() => scrollToSection(section2Ref)}
            >
              SKILLS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link pt-3 projects"
              onClick={() => scrollToSection(section3Ref)}
            >
              PROJECTS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link pt-3 contact"
              onClick={() => scrollToSection(section4Ref)}
            >
              CONTACT
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link pt-3"
              onClick={() => scrollToSection(section5Ref)}
            >
              GITHUB
            </a>
          </li>
          <li className="nav-item">
            <div className="nav-link resume">
              <a
                style={{ textDecoration: "none" }}
                id="resume-link-1"
                href={Nishant_Kumar_Singh_Resume}
                target="_blank"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1smA1-ETlauMzjFuyKWmEgKs6lfwADTzI/view?usp=sharing",
                    "_blank"
                  )
                }
                download
              >
                <DownloadResume />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
