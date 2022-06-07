import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/about">
          <span className="navbar-brand mb-0 h1">Logo</span>
        </Link>
        <div className="ml-auto">
          <Link to="/">
            <button className="btn btn-primary">DinnerDateDessert</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/login">
            <button className="btn btn-primary">Signup/Login</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/sandbox">
            <button className="btn btn-primary">Leo's Sandbox</button>
          </Link>
          <div className="ml-auto">
            <Link to="/questionnaire">
              <button className="btn btn-primary">Questionnaire</button>
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};
