import React from "react";
import "../sassfiles/home.css";
import { TfiFacebook } from 'react-icons/tfi';
import { BsTwitter } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { RiBehanceFill } from 'react-icons/ri';
import { TbBrandGithub } from 'react-icons/tb';
import Hero from "../Subcomponents/Hero"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faTelegramPlane,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <section
      id="home"
      className="s-home target-section"
      data-parallax="scroll"
      data-natural-width={3000}
      data-natural-height={2000}
      data-position-y="center"
      style={{color:"green"}}
    >
      <div className="home-content">
       
         <Hero/>


      </div>
   
    </section>
  );
};

export default Home;
