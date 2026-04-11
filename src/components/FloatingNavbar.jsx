import portfolio from "/icons8_portfolio.png";
import contact from "/icons8_phone.png";
import about from "/icons8_person.png";
import home from "/icons8_home.png";

import { motion } from "framer-motion";

const FloatingNavbar = () => {

      const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{once: true}}
    className="fixed bottom-6 left-1/2 -translate-x-1/2  rounded-full w-[320px] md:max-w-max px-8 md:px-4 bg-[#0A2758] border-Burning-Tomato bg-opacity-80 backdrop-blur-sm z-100 py-3">
      <ul className="flex justify-between gap-8 items-center">
        <li>
          <a href="#home" onClick={() => scrollToSection("home")}>
            <img src={home} alt="home" className=" md:w-12 h-12 w-16 hover:scale-110 transition-transform duration-300" />
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => scrollToSection("about")}>
            <img src={about} alt="About" className="h-12 md:w-12 w-16 hover:scale-110 transition-transform duration-300" />
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => scrollToSection("projects")}>
            <img src={portfolio} alt="Portfolio" className="h-12 md:w-12 w-16 hover:scale-110 transition-transform duration-300" />
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => scrollToSection("contact")}>
            <img src={contact} alt="Contact" className="h-12 md:w-12 w-16 hover:scale-110 transition-transform duration-300   " />
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default FloatingNavbar;
