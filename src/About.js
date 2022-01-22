import { Link } from "react-router-dom";
import mainImage from "./images/main.jpg";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io";

const About = () => {
  return (
    <section className="section page-content">
      <div className="content-center">
        <motion.article
          className="about-img"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <img src={mainImage} alt="about img" className="about-photo" />
        </motion.article>
        <article className="about-info">
          <div className="section-title about-title">
            <h3>about me</h3>
            <div className="underline"></div>
          </div>
          <p>
            Only the change is constant. Following that and my heart :) I
            switched my career from a Regional Sales Manager to a Graphic
            Designer. Throughout my life, I realized that learning and growing
            are key for moving forward, which is the only way we should take a
            step to. That is the reason I decided to become a Frontend Developer
            after many years in Graphics Design. And not just ANY Frontend
            Developer... I decided to become an AMAZING Frontend Developer.
            <br />
            Currently working on that :)
          </p>
          <Link to="/">
            <motion.button
              type="button"
              className="btn"
              whileHover={{ scale: 1.2 }}
            >
              back to home page
            </motion.button>
          </Link>
        </article>
      </div>
      <h4 className="tech-title">Front-End Technologies that I use: </h4>
      <div className="tech-icon-container">
        <FaHtml5 className="tech-icon" />
        <FaCss3Alt className="tech-icon" />
        <IoLogoJavascript className="tech-icon" />
        <FaReact className="tech-icon" />
      </div>
    </section>
  );
};

export default About;
