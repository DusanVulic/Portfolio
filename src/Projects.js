import { projects } from "./data/projectsData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="section page-content">
      <div className="project-header">
        <h3>frontend projects page</h3>
        <div className="underline"></div>
        <p>
          I'm a self-taught web developer constantly learning how to build ( and
          occasionally design ) exceptional digital experiences. Currently, I'm
          focused on learning REACT JS.
          <br /> You can navigate to my GitHub repositories by clicking this
          icon
        </p>
        <a
          className="project-git-link"
          href="https://github.com/DusanVulic"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub className="project-git-icon" />
        </a>
        <p> Or you can check some of my projects below :</p>
      </div>

      <div>
        {projects.map((project) => {
          const { id, image, title } = project;
          return (
            <motion.article
              key={id}
              {...project}
              className="project-article"
              initial={{ x: "+100vw" }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              whileHover={{
                scale: 1.015,
                duration: 0.25,
              }}
            >
              <img src={image} alt="project img" className="project-image" />

              <div>
                <h4>{title}</h4>

                <Link to={`/project/${id}`}>
                  <motion.button
                    type="button"
                    className="btn project-btn"
                    whileHover={{ scale: 1.2 }}
                  >
                    read more
                  </motion.button>
                </Link>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
