import { motion } from "framer-motion";
import "./Projectspage.css";

const variants = {
  initialLeft: { scale: 0, opacity: 0, x: -200, y: 100 },
  initialRight: { scale: 0, opacity: 0, x: 200, y: 100 },
  animate: {
    scale: 1,
    opacity: 1,
    x: 0,
    y: 0,

    transition: {
      type: "tween",
      delay: 0.2,
      duration: 1,
    },
  },
};

const Projects = () => {
  return (
    <>
      <main className="project_wrapper">
        <h1 className="projects_headings">PROJECTS</h1>
        <div className="sfh-project">
          <motion.iframe
            initial="initialLeft"
            whileInView="animate"
            variants={variants}
            className="sfh-project-image"
            src="https://www.youtube.com/embed/XJyDYJNxWxk?autoplay=1&loop=1&playlist=XJyDYJNxWxk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />

          <div className="sfh-project-description">
            <h2>The Global Chronicle</h2>
            <ul className="description_list">
              <li>
                Uses local storage for caching news data, enabling offline
                access.
              </li>
              <li>Adapts to various screen sizes using media queries.</li>
              <li>Utilizes Firebase for secure login, signup, and signout.</li>
              <li>
                Employs Redux for state management and integrates Firebase for
                user favorites.
              </li>
            </ul>
            <div className="project-skills">
              <h3>SKILLS:</h3>
              <p>
                JavaScript, ReactJS, Redux, Redux toolkit, Firebase, CSS, HTML
              </p>
            </div>
            <div className="project-skills">
              <div>
                <h3>LINK:</h3>
              </div>
              <a
                href="https://github.com/simgym/Global-Chronicle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>https://github.com/simgym/Global-Chronicle</p>
              </a>
            </div>
          </div>
        </div>
        <div className="ADVi">
          <div className="advi-project">
            <div className="advi-project-description">
              <h2>ADVi</h2>
              <ul className="description_list">
                <li>
                  Developed using REST APIs, offering a comprehensive
                  experience.
                </li>
                <li>
                  Showcases trending, upcoming, top-rated movies, TV shows, and
                  celebrity spotlights.{" "}
                </li>
                <li>
                  Enhances user experience by suggesting similar movies or shows
                </li>
                <li>
                  Enables secure user authentication and data storage, including
                  comments in a real-time database.
                </li>
              </ul>
              <div className="project-skills">
                <h3>SKILLS:</h3>
                <p>
                  JavaScript, ReactJS, Redux, Redux toolkit, Firebase, REST
                  APIs, CSS, HTML
                </p>
              </div>
              <div className="project-skills">
                <div>
                  <h3>LINK:</h3>
                </div>
                <a
                  href="https://advi-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>https://advi-two.vercel.app/</p>
                </a>{" "}
              </div>
            </div>
            <motion.iframe
              initial="initialRight"
              whileInView="animate"
              variants={variants}
              className="advi-project-image"
              src="https://www.youtube.com/embed/IuLDnHzL7Zo?autoplay=1&loop=1&playlist=IuLDnHzL7Zo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
          <div className="sfh-project">
            {" "}
            <motion.iframe
              initial="initialLeft"
              whileInView="animate"
              variants={variants}
              className="sfh-project-image"
              src="https://www.youtube.com/embed/wOLFsSiECog?autoplay=1&loop=1&playlist=wOLFsSiECog"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            <div className="sfh-project-description">
              <h2>75 Hard Tracker</h2>
              <ul className="description_list">
                <li>
                  Utilizes React, Redux, Firebase, and React Router for a robust
                  foundation.{" "}
                </li>
                <li>
                  Ensures secure login/signup through Firebase Authentication.{" "}
                </li>
                <li>
                  Utilizes an interactive graph for visualizing daily progress.{" "}
                </li>
                <li>
                  Provides a user-friendly experience across both desktop and
                  mobile devices.
                </li>
              </ul>
              <div className="project-skills">
                <h3>SKILLS:</h3>
                <p>
                  JavaScript, ReactJS, Redux, Redux toolkit, Firebase, CSS, HTML
                </p>
              </div>
              <div className="project-skills">
                <div>
                  <h3>LINK:</h3>
                </div>
                <a
                  href="https://seventy-five-hard-murex.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>https://seventy-five-hard-murex.vercel.app/</p>
                </a>
              </div>
            </div>
          </div>
          <div className="weather-project">
            <div className="weather-project-description">
              <h2>Weatheria</h2>
              <ul className="description_list">
                <li>
                  Real-time updates on temperature, conditions, and more for
                  selected cities.
                </li>
                <li>
                  Smart search with auto-suggestions for precise location
                  selection.
                </li>
                <li>
                  Seamless rendering of city search dropdown for an elegant user
                  experience.{" "}
                </li>
                <li>
                  Fully responsive for a consistent and enjoyable experience on
                  various devices.
                </li>
              </ul>
              <div className="project-skills">
                <h3>SKILLS:</h3>
                <p>
                  JavaScript, ReactJS, Redux, Redux toolkit, REST API, CSS, HTML
                </p>
              </div>
              <div className="project-skills">
                <div>
                  <h3>LINK:</h3>
                </div>
                <a
                  href="https://weather-app-bb4h.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>https://weather-app-bb4h.vercel.app/</p>
                </a>{" "}
              </div>
            </div>
            <motion.iframe
              initial="initialRight"
              whileInView="animate"
              variants={variants}
              className="advi-project-image"
              src="https://www.youtube.com/embed/YI-rslqREn4?autoplay=1&loop=1&playlist=YI-rslqREn4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
