import { useRef } from "react";
import Navbar from "./components/navbar/Navbar";
import Homepage from "../src/components/Homepage";
import Educationpage from "./components/Educationpage";
import Skills from "./components/Skillspage";
import Projects from "./components/Projectspage";
import { ContactUs } from "./components/Contact/Contactform";
import "./App.css";

function App() {
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <main>
        <div>
          <section id="Homepage">
            <Navbar />
            <Homepage
              scrollToSection={scrollToSection}
              contactRef={contactRef}
              projectRef={projectRef}
            />
          </section>
          <section id="Education">
            <Educationpage />
          </section>
          <section id="Skills">
            <Skills />
          </section>
          <section ref={projectRef} id="Projects">
            <Projects />
          </section>
          <section ref={contactRef} id="Contact">
            <ContactUs />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
