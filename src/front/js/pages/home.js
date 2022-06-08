import React from "react";
import { HeroBanner } from "../component/herobanner";
<<<<<<< HEAD


=======
import { HomePageCard } from "../component/homepagecard";
import { Navbar } from "../component/navbar";
>>>>>>> 065b19e (herobanner, cards started)

export const Home = () => {
  return (
    <>
<<<<<<< HEAD

=======
      <Navbar />
>>>>>>> 065b19e (herobanner, cards started)
      <div className="container-fluid">
        <div className="row">
          <div className="col"></div>
        </div>
        <HeroBanner />
        <div className="row">
          <div className="col">
            <HomePageCard />
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
