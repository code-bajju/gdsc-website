import React from "react";
import "../sassfiles/Cards.css"
import { FaBrush, FaObjectGroup, FaMicrophone, FaFirefoxBrowser, FaCube, FaArrowRight } from "react-icons/fa";

const Service = ({ icon, title, description }) => (

  <div className="col-block service-item" data-aos="fade-up">
    <div className="service-icon">{icon}</div>
    <div className="service-text">
      <h3 className="h2">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);
const Services = () => (

  <div className="row services-list block-1-2 block-tab-full">
    <div className="services-container">
      <Service
        icon={<FaBrush />}
        title="Brand Identity"
        description="This is my description for Brand Identity."
      />
      <Service
        icon={<FaObjectGroup />}
        title="Illustration"
        description="This is my description for Illustration."
      />
      <Service
        icon={<FaMicrophone />}
        title="Marketing"
        description="This is my description for Marketing."
      />
    </div>
    <div className="services-container ">
      <Service
        icon={<FaFirefoxBrowser />}
        title="Web Design"
        description="This is my description for Web Design."
      />
      <Service
        icon={<FaCube />}
        title="Packaging Design"
        description="This is my description for Packaging Design."
      />
      <Service
        icon={<FaArrowRight />}
        title="Web Development"
        description="This is my description for Web Development."
      />
    </div>
  </div>
);
export default Services;