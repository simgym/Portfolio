import linkedin from "../../assets/linkedin.jpg";
import github from "../../assets/github.jpg";
import tweet from "../../assets/tweet.jpg";
import "./Navbar.css";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <>
      <main>
        <div className="wrapper">
          <Sidebar />
          <motion.h2
            initial={{ opacity: 0.5, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            Portfolio
          </motion.h2>
          <div className="social">
            <motion.a
              href="https://www.linkedin.com/in/adiar24/"
              target="_blank"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <img src={linkedin} alt="" />
            </motion.a>
            <motion.a
              href=" https://github.com/simgym"
              target="_blank"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, type: "spring" }}
            >
              <img src={github} alt="" />
            </motion.a>
            <motion.a
              href="https://twitter.com/adiar24"
              target="_blank"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <img src={tweet} alt="" />
            </motion.a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
