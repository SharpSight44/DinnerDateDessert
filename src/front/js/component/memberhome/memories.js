import React from "react";
import { MemberNavbar } from "../memberNavbar";
import TitlebarImageList from "../memberhome/memoriescard";
import Surveytwo from "../memoriessurvey";

export const Memories = () => {
  return (
    <>
      <MemberNavbar />
      <div className="memsurvey">
        <Surveytwo />
      </div>
      <h1 className="memoriesheader">See your memories here!</h1>
      <TitlebarImageList />
      <div className="container-fluid">
        <div className="row">
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};
