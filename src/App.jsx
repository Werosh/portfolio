import React, { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link, Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const App = () => {
  const { theme } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Preloader />
      <motion.div
        className="fixed top-0 left-0 z-50 w-full h-1 bg-blue-500"
        style={{ scaleX: smoothScroll, transformOrigin: "0%" }}
      />
      <Navbar />
      <main className="text-black transition-colors duration-500 bg-white dark:bg-gray-900 dark:text-white">
        <Element name="hero">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={sectionVariants}>
            <Hero />
          </motion.div>
        </Element>
        <Element name="about">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={sectionVariants}>
            <About />
          </motion.div>
        </Element>
        <Element name="projects">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={sectionVariants}>
            <Projects />
          </motion.div>
        </Element>
        <Element name="skills">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={sectionVariants}>
            <Skills />
          </motion.div>
        </Element>
        <Element name="contact">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={sectionVariants}>
            <Contact />
          </motion.div>
        </Element>
        <Footer />
      </main>
    </div>
  );
};

export default App;