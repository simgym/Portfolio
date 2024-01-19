import "./Homepage.css";
import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

const Homepage = ({ scrollToSection, projectRef, contactRef }) => {
  const variants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          initial="initial"
          animate="animate"
          className="textContainer"
          variants={variants}
        >
          <motion.h2 variants={variants}>ADITYA ARYA</motion.h2>
          <motion.h1 variants={variants}>Web developer</motion.h1>
          <div className="buttons">
            <button onClick={() => scrollToSection(projectRef)}>
              See the Latest Works
            </button>
            <button onClick={() => scrollToSection(contactRef)}>
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
      <div className="imageContainer">
        <motion.img
          src={profile}
          alt=""
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", delay: 0.5, stiffness: 200 }}
        />
      </div>
    </div>
  );
};

export default Homepage;
