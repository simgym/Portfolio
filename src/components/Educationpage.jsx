import "./Educationpage.css";
import MSIT from "../../src/assets/MSIT.jpg";
import ipis from "../../src/assets/ipis.jpg";
import { motion } from "framer-motion";

const Educationpage = () => {
  return (
    <>
      <main className="education">
        <h1 className="education-heading">EDUCATION</h1>
        <div className="college">
          <ul className="college-details">
            <li className="college-element">
              <h1>Bachelor of Technology</h1>
              <h2>Maharaja Surajmal Institue of Technology</h2>
              <div className="location-date">
                <p>11/2022 - Present </p>
                <p>New Delhi, India</p>
              </div>
              <div className="courses">
                <h4>Course :</h4>
                <p> Computer Science Engineering </p>
              </div>
            </li>
            <li>
              <motion.img
                src={MSIT}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.7, stiffness: 80 }}
              />
            </li>
          </ul>
        </div>
        <div className="high-school">
          <ul className="high-school-details">
            <li>
              <motion.img
                src={ipis}
                initial={{ x: -600, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.7, stiffness: 80 }}
              />
            </li>
            <li className="school-element">
              <h1>12th (Non-Medical)</h1>
              <h2>Indraprastha International School</h2>
              <div className="location-date">
                <p>04/2021 - 04/2022 </p>
                <div>
                  <p>New Delhi, India</p>
                  <p>94.2%</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Educationpage;
