import React from "react";
import { HeroBanner } from "../component/herobanner";
import { HomePageCard } from "../component/homepagecard";
import { Navbar } from "../component/navbar";
import "../../styles/home.css";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="homebody">
        <div className="container">
          <HeroBanner />
          <div className="row">
            <div className="col">
              <HomePageCard />
              <div className="row">
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
