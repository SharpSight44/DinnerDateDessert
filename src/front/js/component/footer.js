import React, { Component } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import glassesicon from "../../img/glassesicon.jpg";

export const Footer = () => (
  <footer className="footer mt-20 py-3 text-center">
    <div>
      <a href="" rel="noreferrer">
        <img className="footerlogo" src={glassesicon} alt="logo" />
      </a>
      <a href="https://facebook.com" rel="noreferrer">
        <FacebookIcon />
      </a>
      <a href="https://instagram.com" rel="noreferrer">
        <InstagramIcon />
      </a>
    </div>
  </footer>
);
