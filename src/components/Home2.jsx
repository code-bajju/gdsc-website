import React from 'react'
import '../sassfiles/Home.sass'
import { FaChevronRight} from 'react-icons/fa';
import "../sassfiles/home.css";
import { TfiFacebook } from 'react-icons/tfi';
import { BsTwitter } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { RiBehanceFill } from 'react-icons/ri';
import { TbBrandGithub } from 'react-icons/tb';

function Home2() {
  return (
    <div className="Container">
      <div className="parallaxcontainer " style={{backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/001/849/553/original/modern-gold-background-free-vector.jpg")`}}>
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
      <ul className="home-social" style={{alignItems:"end"}}>
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
    </div>
    <div className="map"></div>
    </div>
  )
}

export default Home2;