import React, { useContext } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link, Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <Navbar />
      <main className="bg-black">
        <Element name="hero">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Hero />
          </motion.div>
        </Element>

        <Element name="about">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={sectionVariants}
          >
            <About />
          </motion.div>
        </Element>

        <Element name="blog">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Blog />
          </motion.div>
        </Element>
        <Element name="projects">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Projects />
          </motion.div>
        </Element>
        <Element name="services">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Service />
          </motion.div>
        </Element>

        <Element name="skills">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Skills />
          </motion.div>
        </Element>
        <Element name="contact">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Contact />
          </motion.div>
        </Element>

        <Footer />
      </main>
    </div>
  );
};

export default App;
