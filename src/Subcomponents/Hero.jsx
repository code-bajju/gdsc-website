import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import "../sassfiles/hero.css";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faTelegramPlane,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h2>
          Hi There,
          <br />
          Welcome to <span>GDSC</span>
        </h2>
        <p>
          GDSC stands for Google Developer Student Club, and it is a club for
          college and university students who are interested in technology and
          want to learn more about Google technologies, including Google Cloud
          Platform, Android, Machine Learning, and many others.
          <span className="typing-text"></span>
        </p>
        
        <div className="home-btn" style={{display:"flex"}}>
        <a href="#about" className="btn"  >
          <span>Start A Project</span>
          <FontAwesomeIcon icon={faArrowCircleDown} />
        </a>
        
        <a href="#about" className="btn"  style={{color:"green"}} >
          <span>More About us</span>
          <FontAwesomeIcon icon={faArrowCircleDown} />
        </a>
        </div>
        <div className="socials">
          <ul className="social-icons">
            <li>
              <a
                className="linkedin"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/bajrang-gour/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                className="github"
                aria-label="GitHub"
                href="https://github.com/code-bajju"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                className="twitter"
                aria-label="Twitter"
                href="https://twitter.com/bajjuhydra"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a
                className="telegram"
                aria-label="Telegram"
                href="https://t.me/code0exe"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTelegramPlane} />
              </a>
            </li>
            <li>
              <a
                className="instagram"
                aria-label="Instagram"
                href="https://www.instagram.com/hydra_bajju_33"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="image">
        <img
          draggable="false"
          className="tilt"
          src="./assets/images/hero.jpeg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
