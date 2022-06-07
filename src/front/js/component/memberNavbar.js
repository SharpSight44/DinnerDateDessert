import React from "react";

export const MemberNavbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/account">
          <span className="navbar-brand mb-0 h1">Account</span>
        </Link>
        <div className="ml-auto">
          <Link to="/tailor">
            <button className="btn btn-primary">Tailor</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/desires">
            <button className="btn btn-primary">Desires</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/memories">
            <button className="btn btn-primary">Memories</button>
          </Link>
          <div className="ml-auto">
            <Link to="/upcomingoutings">
              <button className="btn btn-primary">Upcoming Outings</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
