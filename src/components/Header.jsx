import React, { useState, useEffect } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";

const MyNavbar = () => {
  const [scroll, setScroll] = useState(0);
  const [navbarBg, setNavbarBg] = useState("transparent");
  const [textColor, setTextColor] = useState("#000000");
  const [logoColor, setLogoColor] = useState("#000000");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 10;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
        if (scrollCheck) {
          setNavbarBg("black");
          setTextColor("#ffffff");
          setLogoColor("#000000");
        } else {
          setNavbarBg("transparent");
          setTextColor("#000000");
          setLogoColor("#ffffff");
        }
      }
    });
  });

  return (
    <Navbar
      bg={navbarBg}
      expand="lg"
      style={{ height: "100px", transition: "background-color 0.5s ease" }}
      className="justify-content-between sticky-top"
    >
      <Nav className="mr-auto">
        <Nav.Link style={{ color: textColor, fontsize:"15px"}} className="mx-5" href="#home">Home</Nav.Link>
        <Nav.Link style={{ color: textColor ,fontSize: "15px"}} className="mx-5" href="#about">About</Nav.Link>
        <Nav.Link style={{ color: textColor,fontSize: "15px" }} className="mx-5" href="#services">Services</Nav.Link>
      </Nav>
      <Navbar.Brand href="#home">
        <Image
          src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_light_stacked_MrSsU3z.png"
          alt="Logo"
          style={{ height: "50px", filter: `invert(${logoColor === "#000000" ? 0 : 1})` }}
        />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link style={{ color: textColor , fontSize: "15px" }} className="mx-5" href="#pricing">Pricing</Nav.Link>
        <Nav.Link style={{ color: textColor , fontSize: "15px" }} className="mx-5" href="#contact">Contact</Nav.Link>
        <Nav.Link style={{ color: textColor , fontSize: "15px" }} className="mx-5" href="#faq">FAQ</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;
