import React from "react";
import "../sassfiles/home.css";
import { TfiFacebook } from 'react-icons/tfi';
import { BsTwitter } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { RiBehanceFill } from 'react-icons/ri';
import { TbBrandGithub } from 'react-icons/tb';


const Home = () => {
  return (
    <section
      id="home"
      className="s-home target-section"
      data-parallax="scroll"
      data-image-src="https://swall.teahub.io/photos/small/21-210760_google-wallpaper-4k.jpg"
      data-natural-width={3000}
      data-natural-height={2000}
      data-position-y="center"
      style={{ backgroundImage: `url(https://swall.teahub.io/photos/small/21-210760_google-wallpaper-4k.jpg)` }}
    >
      {" "}
      <div className="overlay"></div>
      <div className="shadow-overlay"></div>
      <div className="home-content">
        <div className="row home-content__main">
          <h3>Welcome to GDSC</h3>
          <h1>
            We are the GDSC,
            <br />
            a technical community <br /> focused on developing <br /> our skills and
            creating <br /> innovative digital solutions. <br /> 
          </h1>

          <div className="home-content__buttons">
            <a href="#contact" className="smoothscroll btn btn--stroke">
              Start a Project
            </a>
            <a href="#about" className="smoothscroll btn btn--stroke">
              More About Us
            </a>
          </div>
        </div>

        <div className="home-content__scroll">
          <a href="#about" className="scroll-link smoothscroll">
            <span>Scroll Down</span>
          </a>
        </div>

        <div className="home-content__line"></div>
      </div>
      <ul className="home-social">
        <li>
          <a href="#0">
            <TfiFacebook/>
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="#0">
          <BsTwitter/>
            <span>Twiiter</span>
          </a>
        </li>
        <li>
          <a href="#0">
          <GrInstagram/>
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="#0">
          <RiBehanceFill/>
            <span>Behance</span>
          </a>
        </li>
        <li>
          <a href="#0">
          <TbBrandGithub/>
            <span>Github</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Home;
