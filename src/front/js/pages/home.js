import React from "react";
import { HeroBanner } from "../component/herobanner";
import { Navbar } from "../component/navbar";

export const Home = () => {
  return (
    <>
   <Navbar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col"></div>
        </div>
        <HeroBanner />
        <div className="row">
          <div className="col">
            <h1>Cards</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1>Call to Action/Signup</h1>
          </div>
        </div>
      </div>
    </>
  );
};
