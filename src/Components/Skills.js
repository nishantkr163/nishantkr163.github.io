import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Skills = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <br />
      <div>
        <h1 className="name">Teck Stacks</h1>
        <p>
          The main area of expertise is front end development (client side of
          the web).
        </p>
      </div>
      <img src="" alt="" />
      <div className="container">
        <div className="row ">
          <div
            className="col-md-3 mb-3 mb-md-5 col-p-5 col-6 skills-card"
            data-aos="fade-in"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <svg
              className="skills-card-img"
              width="64"
              height="64"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M.946 0L2.23 14.4L7.992 16l5.777-1.602L15.055 0H.947zM12.26 4.71H5.502l.161 1.809H12.1l-.485 5.422l-3.623 1.004l-3.618-1.004l-.247-2.774H5.9l.126 1.41l1.967.53l.004-.001l1.968-.531l.204-2.29H4.048l-.476-5.341h8.847l-.158 1.766z"
              />
            </svg>
            <h4 className="skills-card-name">HTML5</h4>
          </div>
          <div
            className="col-md-3 mb-3  mb-md-5 col-p-5 col-6 skills-card"
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <svg
              className="skills-card-img"
              width="64"
              height="64"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                fillRule="evenodd"
                d="m1.5 0l1.594 18.056L10 20l6.906-1.944L18.5 0h-17Zm13.577 5.852L9.994 8.125l-.013.005h4.917l-.563 6.762l-4.334 1.323l-.007-.003v.003l-4.358-1.348l-.28-3.405h2.162l.14 1.764l2.316.611l.02-.006v.003l2.397-.706l.164-2.842l-2.561-.008l-4.78-.016l-.163-2.132l4.943-2.153l.288-.125H4.864l-.259-2.18h10.683l-.211 2.18Z"
              />
            </svg>
            <h4 className="skills-card-name">CSS3</h4>
          </div>
          <div
            className="col-md-3 mb-3  mb-md-5col-p-5 col-6 skills-card"
            data-aos="fade-in"
            data-aos-delay="150"
            data-aos-duration="1000"
          >
            <svg
              className="skills-card-img"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <g clipPath="url(#akarIconsJavascriptFill0)">
                  <path
                    fill="#ffffff"
                    fillRule="evenodd"
                    d="M0 0h24v24H0V0Zm18.347 20.12c-1.113 0-1.742-.58-2.225-1.37l-1.833 1.065c.662 1.308 2.015 2.306 4.11 2.306c2.142 0 3.737-1.112 3.737-3.143c0-1.883-1.082-2.72-2.998-3.543l-.564-.241c-.968-.42-1.387-.693-1.387-1.37c0-.547.42-.966 1.08-.966c.647 0 1.064.273 1.451.966l1.756-1.127c-.743-1.307-1.773-1.806-3.207-1.806c-2.014 0-3.303 1.288-3.303 2.98c0 1.835 1.08 2.704 2.708 3.397l.564.242c1.029.45 1.642.724 1.642 1.497c0 .646-.597 1.113-1.531 1.113Zm-8.74-.015c-.775 0-1.098-.53-1.452-1.16l-1.836 1.112c.532 1.126 1.578 2.06 3.383 2.06c1.999 0 3.368-1.063 3.368-3.398v-7.7h-2.255v7.67c0 1.127-.468 1.416-1.209 1.416Z"
                    clipRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="akarIconsJavascriptFill0">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                  </clipPath>
                </defs>
              </g>
            </svg>
            <h4 className="skills-card-name">JavaScript</h4>
          </div>
          <div
            className="col-md-3 mb-3  mb-md-5 col-p-5 col-6 skills-card"
            data-aos="fade-in"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <svg
              className="skills-card-img"
              width="64"
              height="64"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M15.698 7.287L8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45l1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025a1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457"
              />
            </svg>{" "}
            <h4 className="skills-card-name">Git</h4>
          </div>
        </div>
        <div className="row mb-4">
          <div
            className="col-md-3 mb-3  mb-md-5 col-p-5 col-6 skills-card"
            data-aos="fade-in"
            data-aos-delay="250"
            data-aos-duration="1000"
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="white"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>{" "}
            <h4 className="skills-card-name">Github</h4>
          </div>
          <div
            className="col-md-3 mb-3  mb-md-5mb-5 col-p-5 col-6 skills-card"
            data-aos="fade-in"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <svg
              className="skills-card-img"
              width="64"
              height="64"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854S17.573 13.146 16 13.146zm-7.99 8.526l-.63-.156C2.692 20.328 0 18.318 0 15.995s2.693-4.333 7.38-5.521l.63-.156l.177.625a31.42 31.42 0 0 0 1.818 4.771l.135.281l-.135.286a31.047 31.047 0 0 0-1.818 4.771zm-.921-9.74c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063a33.28 33.28 0 0 1 1.578-4.063a32.958 32.958 0 0 1-1.578-4.063zm16.901 9.74l-.177-.625a31.163 31.163 0 0 0-1.818-4.766l-.135-.286l.135-.286a31.047 31.047 0 0 0 1.818-4.771l.177-.62l.63.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zm-.657-5.677a32.524 32.524 0 0 1 1.578 4.063c3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063a33.663 33.663 0 0 1-1.578 4.063zM7.078 11.927l-.177-.625C5.583 6.656 5.984 3.323 8 2.161c1.979-1.141 5.151.208 8.479 3.625l.453.464l-.453.464a31.458 31.458 0 0 0-3.229 3.958l-.182.255l-.313.026a31.612 31.612 0 0 0-5.047.813zm2.531-8.838c-.359 0-.677.073-.943.229c-1.323.766-1.557 3.422-.646 7.005a33.343 33.343 0 0 1 4.313-.672a32.828 32.828 0 0 1 2.734-3.391c-2.078-2.026-4.047-3.172-5.458-3.172zm12.787 27.145c-.005 0-.005 0 0 0c-1.901 0-4.344-1.427-6.875-4.031l-.453-.464l.453-.464a31.458 31.458 0 0 0 3.229-3.958l.177-.255l.313-.031a30.668 30.668 0 0 0 5.052-.813l.63-.156l.177.625c1.318 4.646.917 7.974-1.099 9.135a3.095 3.095 0 0 1-1.604.411zm-5.464-4.505c2.078 2.026 4.047 3.172 5.458 3.172h.005c.354 0 .672-.078.938-.229c1.323-.766 1.563-3.422.646-7.005a32.644 32.644 0 0 1-4.313.667a32.886 32.886 0 0 1-2.734 3.396zm7.99-13.802l-.63-.161a31.993 31.993 0 0 0-5.052-.813l-.313-.026l-.177-.255a31.458 31.458 0 0 0-3.229-3.958l-.453-.464l.453-.464c3.328-3.417 6.5-4.766 8.479-3.625c2.016 1.161 2.417 4.495 1.099 9.141zm-5.255-2.276a33.22 33.22 0 0 1 4.313.672c.917-3.583.677-6.24-.646-7.005c-1.318-.76-3.797.406-6.401 2.943a34.067 34.067 0 0 1 2.734 3.391zM9.609 30.234c-.563.01-1.12-.13-1.609-.411c-2.016-1.161-2.417-4.49-1.099-9.135l.177-.625l.63.156c1.542.391 3.24.661 5.047.813l.313.031l.177.255a31.458 31.458 0 0 0 3.229 3.958l.453.464l-.453.464c-2.526 2.604-4.969 4.031-6.865 4.031zm-1.588-8.567c-.917 3.583-.677 6.24.646 7.005c1.318.75 3.792-.406 6.401-2.943a32.886 32.886 0 0 1-2.734-3.396a32.517 32.517 0 0 1-4.313-.667zm7.979.838c-1.099 0-2.224-.047-3.354-.141l-.313-.026l-.182-.26a39.947 39.947 0 0 1-1.797-2.828a39.917 39.917 0 0 1-1.557-2.969l-.135-.286l.135-.286a40.498 40.498 0 0 1 3.354-5.797l.182-.26l.313-.026a39.962 39.962 0 0 1 6.708 0l.313.026l.182.26a40.077 40.077 0 0 1 3.354 5.797l.135.286l-.135.286a39.62 39.62 0 0 1-3.354 5.797l-.182.26l-.313.026a40.483 40.483 0 0 1-3.354.141zm-2.927-1.448c1.969.151 3.885.151 5.859 0a39.03 39.03 0 0 0 2.927-5.063a37.53 37.53 0 0 0-2.932-5.063a37.881 37.881 0 0 0-5.854 0a37.302 37.302 0 0 0-2.932 5.063a38.624 38.624 0 0 0 2.932 5.063z"
              />
            </svg>
            <h4 className="skills-card-name">React</h4>
          </div>

          <div
            className="col-md-3 mb-3  mb-md-5 col-p-5 col-6 skills-card"
            data-aos="fade-in"
            data-aos-delay="350"
            data-aos-duration="1000"
          >
            <svg
              className="skills-card-img"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M16.54 7c-.805-2.365-2.536-4-4.54-4c-2.774 0-5.023 2.632-5.023 6.496c0 1.956 1.582 4.727 2.512 6" />
                <path d="M4.711 11.979C3.055 13.856 2.497 16.164 3.5 17.89c1.387 2.39 5.138 2.831 8.501.9c1.703-.979 2.875-3.362 3.516-4.798" />
                <path d="M15.014 19.99c2.511 0 4.523-.438 5.487-2.1c1.387-2.39-.215-5.893-3.579-7.824c-1.702-.979-4.357-1.235-5.927-1.07" />
                <path d="M10.493 9.862c.48.276 1.095.112 1.372-.366a1 1 0 0 0-.367-1.365a1.007 1.007 0 0 0-1.373.366a1 1 0 0 0 .368 1.365zM8.5 15.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6-1.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
              </g>
            </svg>{" "}
            <h4 className="skills-card-name">Redux</h4>
          </div>
          <div
            className="col-md-3 mb-3  mb-md-5 col-p-5 col-6 skills-card"
            data-aos="fade-in"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <svg
              className="skills-card-img"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M11.79 11.5H9.72V8.19h2.47c1.26 0 1.96.56 1.96 1.59c0 1.12-.83 1.72-2.36 1.72m.37 1.13H9.72v3.64h2.56c1.56 0 2.38-.63 2.38-1.83s-.85-1.81-2.5-1.81M22 5.31v13.38C22 20.5 20.5 22 18.69 22H5.31C3.5 22 2 20.5 2 18.69V5.31C2 3.5 3.5 2 5.31 2h13.38C20.5 2 22 3.5 22 5.31m-6 9.19c0-1.38-.92-2.37-2.33-2.55v-.06c1-.18 1.79-1.18 1.79-2.26c0-1.55-1.2-2.58-2.96-2.58H8.43v10.36h4.04c2.21 0 3.53-1.09 3.53-2.91Z"
              />
            </svg>{" "}
            <h4 className="skills-card-name">BootStrap</h4>{" "}
          </div>
          <div
            className="col-md-3 mb-3  mb-md-5 col-p-5 col-6 skills-card"
            data-aos="fade-in"
            data-aos-delay="450"
            data-aos-duration="1000"
          >
            <svg
              className="skills-card-img"
              width="64"
              height="64"
              viewBox="0 0 128 128"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6zM48 41l47.9-27.6v55.3L64 87l-16-9.2l32-18.4V41L48 59.4V41z"
              />
              <path
                fill="#ffffff"
                d="M48 77.8v18.4l32 18.4V96.2L48 77.8zm32 36.8L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"
              />
            </svg>{" "}
            <h4 className="skills-card-name">Material UI</h4>
          </div>
          <div
            className="col-md-3 mb-3  mb-md-5 col-p-5 col-6 skills-card"
            data-aos="fade-in"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <svg
              className="skills-card-img"
              width="55.5"
              height="64"
              viewBox="0 0 444 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M93.773 383.301L56.185 359.84c7.174-23.248 66.002-128.702 101.15-125.735c-20.377 53.312-31.795 100.81-63.562 149.196zm73.899-125.875c-16.825 50.264-35.685 96.805-59.43 134.418l113.77 65.845L401.808 354.1v-96.054c-17.409 1.899-28.04 11.714-33.856 27.625c-8.966 24.522-45.09 53.526-74.208 14.434c-46.294 73.817-89.691 61.131-126.072-42.678zm-15.976-37.5c-29.717-63.536-86.128-64.359-110.288 30.382v99.365c16.752-30.082 69.495-126.03 110.288-129.747zm241.551 23.284c-30.182-22.633-75.278 4.926-92.666 44.772c16.273 26.845 32.626 21.312 46.433 8.314c11.115-10.464 14.987-42.382 46.233-53.086zm-131.318 1.74c-28.167-53.934-52.027-95.947-82.744-17.201c25.446 19.944 55.937 40.149 82.744 17.202zm24.196 44.355c-6.059-9.207-12.04-20.276-17.61-31.46c-26.778 21.11-60.71 10.872-94.623-16.6c20.782 53.499 37.073 83.209 53.345 91.251c18.386 9.087 43.204-11.97 58.888-43.191zM30.222 145.277v221.446L222 477.446l191.778-110.723V145.277L222 34.554L30.222 145.277zM444 128v256L222 512L0 384V128L222 0l222 128zm-42.192 96.855c-33.024-49.825-60.828-52.76-81.188-38.38c-18.528 13.084-31.146 44.257-41.24 60.66c4.485 10.063 8.71 15.672 13.613 24.951c23.655-45.014 67.622-71.407 108.815-40.748v-6.483z"
              />
            </svg>{" "}
            <h4 className="skills-card-name">ChartJS</h4>
          </div>
          <div
            className="col-md-3 mb-3  mb-md-5 col-p-5 col-6 skills-card"
            data-aos="fade-in"
            data-aos-delay="550"
            data-aos-duration="1000"
          >
            <svg
              className="skills-card-img"
              width="57.5"
              height="64"
              viewBox="0 0 460 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M156.483 498.57c-28.154 26.468-77.292 11.408-108.562-24.176C6.4 427.148-8.631 337.668 4.754 257.873l151.729 240.696zm32.732-30.512c-18.228-7.747-91.458-45.553-62.463-179.76C80.302 257.764 13.644 234.8 9.378 229.82c0 0 .174 8.073-1.962 23.902l157.637 235.35c3.916-7.718 14.3-13.878 24.162-21.014zm-49.786-79.579c15.543 51.182 43.043 57.232 63.315 69.89L408.585 17.992h2.435L219.913 472.995c19.381 18.274 45.235 36.647 84.038 27.902C463.908 472.324 500.428 214.25 413.902 0C312.147 69.794 235.998 107.428 186.32 181.314c-38.638 57.467-68.612 138.396-46.891 207.165z"
              />
            </svg>{" "}
            <h4 className="skills-card-name">Leaflet</h4>
          </div>
          <div
            className="col-md-3 mb-3  mb-md-5 col-p-5 col-6 skills-card"
            data-aos="fade-in"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <svg
              className="skills-card-img"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12Z"
              />
            </svg>{" "}
            <h4 className="skills-card-name">TailWind</h4>
          </div>
          <div
            className="col-md-3 mb-3  mb-md-5 col-p-5 col-6 skills-card"
            data-aos="fade-in"
            data-aos-delay="650"
            data-aos-duration="1000"
          >
            <svg
              width="80"
              height="64"
              viewBox="0 0 640 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="white"
                d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5c3.8-1.3 4.6-1.6 8.7-4c.4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18c-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2c-18-2.4-19.8-3.6-19.8-7.8c0-3.5 1.5-8.1 14.8-8.1c11.9 0 16.3 2.6 18.1 10.6c.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5c.3-.4.5-.8.4-1.3c-1.2-13.8-10.3-20.2-28.8-20.2c-16.5 0-26.3 7-26.3 18.6c0 12.7 9.8 16.1 25.6 17.7c18.9 1.9 20.4 4.6 20.4 8.3c0 6.5-5.2 9.2-17.4 9.2c-15.3 0-18.7-3.8-19.8-11.4c-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7c0 9.7 5.3 21.3 30.6 21.3c18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1c6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3c-5.1 0-9.3 4.1-9.3 9.3c0 5.2 4.2 9.4 9.3 9.4c5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9c-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3c0 2.3-1.5 2.8-2.4 3.1c1.7.1 1.8 1.2 2.1 2.8c.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2c1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1c1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0c1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7c.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"
              />
            </svg>{" "}
            <h4 className="skills-card-name">NodeJS</h4>
          </div>
          <div
            className="col-md-3 mb-3  mb-md-5 col-p-5 col-6 skills-card"
            data-aos="fade-in"
            data-aos-delay="700"
            data-aos-duration="1000"
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771l-.5-.667l-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92l-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83l3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27c1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957a6.272 6.272 0 0 1-7.306-.933a6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278c-2.882-.04-4.944 2.094-5.071 5.264z"
              />
            </svg>{" "}
            <h4 className="skills-card-name">ExpressJS</h4>
          </div>
          <div
            className="col-md-3 mb-3  mb-md-5 col-p-5 col-6 skills-card"
            data-aos="fade-in"
            data-aos-delay="750"
            data-aos-duration="1000"
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115c-.28-.394-.53-.954-.735-1.44c-.036.495-.055.685-.523 1.184c-.723.566-4.438 3.682-4.74 10.02c-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481a28.48 28.48 0 0 1 .51-3.07c.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695c-.381-.045-.765-1.76-.765-2.405z"
              />
            </svg>{" "}
            <h4 className="skills-card-name">MongoDB</h4>
          </div>
          <div
            className="col-md-3 mb-3  mb-md-5 col-p-5 col-6 skills-card"
            data-aos="fade-in"
            data-aos-delay="800"
            data-aos-duration="1000"
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428c6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453l-.307-.307l-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125l-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032a.06.06 0 0 1 .01-.073l.645-.645l.512.512zm-2.803-.459l1.172-1.172l.879.878l-1.979.426a.074.074 0 0 1-.085-.039a.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083a.077.077 0 0 1 .022-.046h.002l.946-.946l1.222 1.222l-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934l-.294-.295l3.762-3.758l1.82-.393l.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839l4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207l1.533-1.533c.661.72.637 1.832-.054 2.522zm-.1-1.544a.143.143 0 0 0-.053.157a.416.416 0 0 1-.053.45a.14.14 0 0 0 .023.197a.141.141 0 0 0 .084.03a.14.14 0 0 0 .106-.05a.691.691 0 0 0 .087-.751a.138.138 0 0 0-.194-.033z"
              />
            </svg>{" "}
            <h4 className="skills-card-name">Postman</h4>
          </div>
        </div>
      </div>
      <div>
        <h1 className="name">Soft Skills</h1>
        <p style={{ width: "80%", margin: "auto" }}>
          Proficient in effective communication and enhancing cross-functional
          teamwork for holistic software solutions.
        </p>
      </div>
      <div className="container mt-3 gap-4 d-flex flex-column align-items-start w-75">
        <div className="d-flex gap-4 align-items-center">
          <svg
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="1000"
            width="30"
            height="30"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M1 0L0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675l-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617l.968.968l-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96l2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46L4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242l.529.026l.287.445l.445.287l.026.529L5 13l-.242.471l-.026.529l-.445.287l-.287.445l-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471l.026-.529l.445-.287l.287-.445l.529-.026L3 11Z"
            />
          </svg>{" "}
          <h2
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            Collaboration
          </h2>
        </div>
        <div className="d-flex gap-4 align-items-center">
          <svg
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="1000"
            width="30"
            height="30"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M1 0L0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675l-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617l.968.968l-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96l2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46L4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242l.529.026l.287.445l.445.287l.026.529L5 13l-.242.471l-.026.529l-.445.287l-.287.445l-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471l.026-.529l.445-.287l.287-.445l.529-.026L3 11Z"
            />
          </svg>{" "}
          <h2
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            Problem Solving
          </h2>
        </div>
        <div className="d-flex gap-4 align-items-center">
          <svg
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="1000"
            width="30"
            height="30"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M1 0L0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675l-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617l.968.968l-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96l2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46L4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242l.529.026l.287.445l.445.287l.026.529L5 13l-.242.471l-.026.529l-.445.287l-.287.445l-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471l.026-.529l.445-.287l.287-.445l.529-.026L3 11Z"
            />
          </svg>{" "}
          <h2
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            Time Management
          </h2>
        </div>
        <div className="d-flex gap-4 align-items-center">
          <svg
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="1000"
            width="30"
            height="30"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M1 0L0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675l-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617l.968.968l-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96l2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46L4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242l.529.026l.287.445l.445.287l.026.529L5 13l-.242.471l-.026.529l-.445.287l-.287.445l-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471l.026-.529l.445-.287l.287-.445l.529-.026L3 11Z"
            />
          </svg>{" "}
          <h2
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            Teamwork
          </h2>
        </div>
      </div>
      <br />
    </>
  );
};
