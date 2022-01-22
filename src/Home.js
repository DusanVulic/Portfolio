import logo from "./images/logo.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="section page-content">
      <motion.div
        className="welcome-note"
        initial={{ x: "-100vh", opacity: 0, color: "#333" }}
        animate={{ x: 0, opacity: 1, color: "#09859B" }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <motion.h3 initial={{ color: "#333" }} animate={{ color: "#09859B" }}>
          hello and welcome to my portfolio
        </motion.h3>
      </motion.div>
      <div className="logo-container">
        <motion.img
          src={logo}
          alt="home page logo"
          className="main-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 3 }}
        />
      </div>
    </section>
  );
};

export default Home;
