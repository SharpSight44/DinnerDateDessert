import React, { useEffect, useState, useContext } from "react";
import { HeroBanner } from "../component/herobanner";
import { HomePageCard } from "../component/homepagecard";
import { Navbar } from "../component/navbar";
import "../../styles/home.css";
import { Login } from "./login";
import { LoginWindow } from "../layout";



export const Home = () => {
  const { logStatus, setLogStatus } = useContext(LoginWindow)



  return (
    <>
      <Navbar />
      {logStatus == true ? (<div style={{ width: "100vw", height: "150vh", background: "rgba(223, 242, 228, 0.3)", backdropFilter: "blur(5px)", position: "absolute", zIndex: "2" }}><div style={{ marginLeft: "33%", marginTop: "10%" }}><Login /></div></div>) : (<div></div>)}
      <div className="homebody">

        <div className="container">
          <h1 className="homepage-title text-center text-white">Welcome to the future of date night</h1>
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
      <div></div>

    </>
  );
};
