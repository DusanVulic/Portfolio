import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
import logo from "./images/logo.jpg";

const Contact = () => {
  const [state, handleSubmit] = useForm("mrgjeorr");

  if (state.succeeded) {
    return (
      <section className="section page-content">
        <div className="message-sucess">
          <h3>
            Thank you very much for your message. <br /> I'll get right back to
            you as soon as possible.
          </h3>
          <Link to="/">
            <button type="button " className="btn">
              back home
            </button>
          </Link>
        </div>
        <div className="logo-container">
          <motion.img
            src={logo}
            alt="sucess logo"
            className="message-logo"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="page-content ">
      <div className="contact-header">
        <h4>whether it is frontend or vector / design projects...</h4>
        <div className="underline"></div>
        <p>
          ...if you have any questions, please, do not hesitate to contact me.
        </p>
      </div>
      {/* form */}
      <motion.div
        className="form-content"
        initial={{ x: "+100vw" }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <form className="contact-form" onSubmit={handleSubmit}>
          <h4>Your info and question : </h4>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input
            type="text"
            id="lastname"
            name="lastname"
            className="form-input"
            placeholder="last name"
            required
          />
          <ValidationError
            prefix="Lastname"
            field="lastname"
            errors={state.errors}
          />
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="your email"
            name="_replyto"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            name="message"
            placeholder="Your message : "
            className="form-input"
            rows="5"
            id="text"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button className="btn" type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
