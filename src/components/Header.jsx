import React, { useState, useEffect } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";

const MyNavbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      bg={scroll ? "dark" : "transparent"}
      expand="lg"
      variant={scroll ? "dark" : "light"}
      style={{
        height: "80px",
        transition: "background-color 0.5s ease",
        borderRadius: "15px",
      }}
      className="justify-content-between sticky-top"
    >
      <Nav className="mr-auto">
        <Nav.Link
          style={{ color: scroll ? "#ffffff" : "#000000", fontSize: "15px" }}
          className="mx-5"
          href="#about"
        >
          About
        </Nav.Link>
        <Nav.Link
          style={{ color: scroll ? "#ffffff" : "#000000", fontSize: "15px" }}
          className="mx-5"
          href="#services"
        >
          Services
        </Nav.Link>
      </Nav>
      <Navbar.Brand href="#home">
        <Image
          src={scroll ? "https://i.postimg.cc/Fz4tgJ2V/logo-white.png" : "https://i.postimg.cc/Bbcrhn39/logo-color.png"}
          alt="Logo"
          style={{ height: "40px" }}
        />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link
          style={{ color: scroll ? "#ffffff" : "#000000", fontSize: "15px" }}
          className="mx-5"
          href="#contact"
        >
          Contact
        </Nav.Link>
        <Nav.Link
          style={{ color: scroll ? "#ffffff" : "#000000", fontSize: "15px" }}
          className="mx-5"
          href="#faq"
        >
          FAQ
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;
