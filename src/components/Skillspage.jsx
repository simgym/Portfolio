import js from "../assets/js.jpg";
import ts from "../assets/ts.jpg";
import cpp_logo from "../assets/cpp.jpg";
import html_logo from "../assets/html.jpg";
import css_logo from "../assets/css.jpg";
import react_logo from "../assets/react.jpg";
import redux_logo from "../assets/redux.jpg";
import firebase_logo from "../assets/fb.jpg";
import framer_logo from "../assets/framer.jpg";
import github_logo from "../assets/githublogo.jpg";
import { motion } from "framer-motion";
import "./Skillspage.css";

const variants = {
  rotate: {
    rotate: "10deg",
    scale: 0.8,
    transition: {
      stiffness: 100,
      type: "spring",
    },
  },
  tap: {
    rotate: "-10deg",
  },
};

const Skills = () => {
  return (
    <>
      <div className="skills-wrapper">
        <h1>SKILLS</h1>
        <div className="skills-container">
          <span>
            <a href="https://www.typescriptlang.org/" target="_blank">
              <motion.img
                src={ts}
                whileHover="rotate"
                whileTap="tap"
                variants={variants}
              />
            </a>
          </span>
          <span>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/javascript"
              target="_blank"
            >
              <motion.img
                src={js}
                whileTap="tap"
                whileHover="rotate"
                variants={variants}
              />
            </a>
          </span>
          <span>
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
              target="_blank"
            >
              <motion.img
                src={html_logo}
                whileHover="rotate"
                whileTap="tap"
                variants={variants}
              />
            </a>
          </span>
          <span>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference"
              target="_blank"
            >
              <motion.img
                src={css_logo}
                whileHover="rotate"
                whileTap="tap"
                variants={variants}
              />
            </a>
          </span>
          <span>
            <a href="https://firebase.google.com/" target="_blank">
              <motion.img
                src={firebase_logo}
                whileHover="rotate"
                whileTap="tap"
                variants={variants}
              />
            </a>
          </span>
          <span>
            <a href="https://react.dev/" target="_blank">
              <motion.img
                src={react_logo}
                whileHover="rotate"
                whileTap="tap"
                variants={variants}
              />
            </a>
          </span>
          <span>
            <a href="https://redux.js.org/" target="_blank">
              <motion.img
                src={redux_logo}
                whileHover="rotate"
                whileTap="tap"
                variants={variants}
              />
            </a>
          </span>
          <span>
            <a href="https://www.framer.com/motion/" target="_blank">
              <motion.img
                src={framer_logo}
                whileHover="rotate"
                whileTap="tap"
                variants={variants}
              />
            </a>
          </span>
          <span>
            <a href="https://github.com/" target="_blank">
              <motion.img
                src={github_logo}
                whileHover="rotate"
                whileTap="tap"
                variants={variants}
              />
            </a>
          </span>
          <span>
            <a href="https://isocpp.org/" target="_blank">
              <motion.img
                src={cpp_logo}
                whileHover="rotate"
                whileTap="tap"
                variants={variants}
              />
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Skills;
