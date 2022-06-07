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
            {/* <div className="userdropdown">
              <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" href="dinnerdatedessert.com/accountsettings">Account</a></li>
                  <li><a class="dropdown-item" href="dinnerdatedessert.com/tailor">Tailor</a></li>
                  <li><a class="dropdown-item" href="dinnerdatedessert.com/desires">Desires</a></li>
                  <li><a class="dropdown-item" href="dinnerdatedessert.com/memories">Memories</a></li>
                  <li><a class="dropdown-item" href="dinnerdatedessert.com/upcomingoutings">Upcoming Outings</a></li>
                  <li><a class="dropdown-item" href="dinnerdatedessert.com/about">About</a></li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
