import { motion } from "framer-motion";

const Links = () => {
  const items = ["Homepage", "Education", "Skills", "Projects", "Contact"];

  return (
    <>
      <main>
        <motion.div className="links">
          {items.map((item, index) => (
            <motion.a href={`#${item}`} key={index}>
              {item}
            </motion.a>
          ))}
        </motion.div>
      </main>
    </>
  );
};

export default Links;
