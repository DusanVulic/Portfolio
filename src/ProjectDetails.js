import { useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "./data/projectsData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  // eslint-disable-next-line
  const [list, setList] = useState(projects);

  // eslint-disable-next-line
  const [single, setSingle] = useState(projects[id - 1]);

  return (
    <section className="page-content">
      <div className="single-page-center">
        <motion.article
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <img
            src={single.image}
            alt="single project img"
            className="single-project-img"
          />
        </motion.article>
        <motion.article
          className="info"
          initial={{ x: "+100vw" }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <h3>{single.title}</h3>
          <div className="underline"></div>
          <p>{single.description}</p>
          <h4>CREATED WITH :</h4>
          <p>{single.tech}</p>

          {/* tech icons */}
          <div className="project-icons">
            {single.icons.map((icon, index) => {
              return <span key={index}> {icon}</span>;
            })}
          </div>
          {/* tech icons */}
          <div className="button-container">
            {/* button to web page */}
            <a href={single.url} target="_blank" rel="noreferrer noopener">
              <button type="button" className="btn project-btn ">
                go to web page
              </button>
            </a>
            {/* link to projects page */}
            <Link to="/projects">
              <button type="button  " className="btn project-btn">
                back to projects page
              </button>
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default ProjectDetails;
