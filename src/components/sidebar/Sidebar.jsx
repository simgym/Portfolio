import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Links from "./Links";
import ToggleButton from "./ToggleButton";
import "./Sidebar.css";

const variants = {
  open: {
    clipPath: "circle(7200px at 50px 50px)",
    transition: { type: "spring", stiffness: 10 },
  },
  close: {
    clipPath: "circle(10px at 0px 0px)",
    transition: { delay: 0.5, type: "spring", stiffness: 200, damping: 50 },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <main>
        <AnimatePresence>
          {open && (
            <motion.div
              className="sidebar"
              animate={"open"}
              exit="close"
              variants={variants}
            >
              <div className="bg">
                <Links />
              </div>
              <ToggleButton setOpen={setOpen} className="toggle-button" />
            </motion.div>
          )}
        </AnimatePresence>
        <div>
          <ToggleButton setOpen={setOpen} className="toggle-button" />
        </div>
      </main>
    </>
  );
};

export default Sidebar;
