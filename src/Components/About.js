import DownloadResume from "./DownloadResume";
import Nishant_Kumar_Singh_Resume from "../Resume/Nishant_Kumar_Singh_Resume.pdf";
import Copy from "./Copy";

const About = () => {
  return (
    <div className="about-div d-flex flex-column gap-4">
      <h1 className="mb-4 name">About Me</h1>
      <h2>
        As an ambitious Full Stack Web Developer, my specialization lies in
        Frontend Development, where my mission is to empower businesses and
        elevate online experiences. With expertise in the MERN stack, I am
        committed to continuous learning and staying at the forefront of the
        latest technologies.
      </h2>
      <div className="container">
        <div className="d-flex align-items-center my-3 justify-content-center">
          <svg
            width="30px"
            height="30px"
            // viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"
            />
          </svg>{" "}
          <h6>Patna, Bihar</h6>
        </div>
        <div className="d-flex align-items-center my-3 justify-content-center">
          <svg
            width="30px"
            height="30px"
            // viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
            />
          </svg>
          <h6>
            <a
              id="contact-email"
              className="link_text"
              href="mailto:nishantkr488@gmail.com"
            >
              nishantkr488@gmail.com
            </a>
          </h6>
        </div>
        <div className="d-flex align-items-center my-3 gap-3 justify-content-center">
          <svg
            width="30px"
            height="30px"
            // viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M19.95 21q-3.125 0-6.175-1.363t-5.55-3.862q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3Z"
            />
          </svg>
          <h6 id="contact-phone" className="pt-2">
            +91 8987366488
          </h6>
          <Copy />
        </div>
        {/* <div>
          <Copy />
        </div> */}
        <div className="d-flex align-items-center my-3 gap-2 justify-content-center">
          <svg
            width="30px"
            height="30px"
            // viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
            />
          </svg>
          <h6>
            <a
              id="contact-github"
              className="link_text"
              href="https://github.com/nishantkr163"
            >
              GitHub
            </a>
          </h6>

          <svg
            width="30px"
            height="30px"
            // viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
            />
          </svg>
          <h6>
            <a
              id="contact-linkedin"
              className="link_text"
              href="https://www.linkedin.com/in/nishant-singh-9629ab270/"
            >
              LinkedIn
            </a>
          </h6>
        </div>
      </div>
      <div
        id="resume-button-2"
        className="mt-3 d-flex justify-content-center align-items-center"
      >
        <a
          style={{ textDecoration: "none" }}
          id="resume-link-1"
          href={Nishant_Kumar_Singh_Resume}
          target="_blank"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1WLH8qHDCVPiFYqPCJGQrvbwJRWM4R5n6/view?usp=sharing",
              "_blank"
            )
          }
          download
        >
          <DownloadResume />
        </a>
      </div>
    </div>
  );
};

export default About;
