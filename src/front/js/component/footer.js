import React, { Component } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import glassesicon from "../../img/glassesicon.jpg";
import { FaGooglePlay } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";

export const Footer = () => (
  <footer className="footer mt-20 py-3 text-center">
    <div>
      <a href="" rel="noreferrer">
        <img className="footerlogo" src={glassesicon} alt="logo" />
      </a>
    </div>
    <div>
      <a
        href="https://play.google.com/store/games"
        rel="noreferrer"
        className="googlelogo"
      >
        <FaGooglePlay />
      </a>
      <a
        href="https://www.apple.com/app-store/"
        rel="noreferrer"
        className="applelogo"
      >
        <GrAppleAppStore />
      </a>
      <a href="https://facebook.com" rel="noreferrer" className="facebookicon">
        <FacebookIcon />
      </a>
      <a
        href="https://instagram.com"
        rel="noreferrer"
        className="instagramicon"
      >
        <InstagramIcon />
      </a>
    </div>
  </footer>
);
