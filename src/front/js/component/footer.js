import React, { Component } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <div>
      <a href="https://facebook.com" rel="noreferrer">
        <FacebookIcon />
      </a>
      <a href="https://instagram.com" rel="noreferrer">
        <InstagramIcon />
      </a>
    </div>
  </footer>
);
