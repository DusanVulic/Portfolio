import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import logo from "./images/logo.jpg";
import { links } from "./data/data";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>

          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            {!showLinks ? <FaBars /> : <FaTimes className="close-btn" />}
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;

              return (
                <li key={id}>
                  <Link to={url} onClick={() => setShowLinks(false)}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          <li>
            <a
              href="https://github.com/DusanVulic"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/dusanxvulic?utm_medium=copy_link"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="mailto:dusanvulic11@gmail.com">
              <FaEnvelope />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
