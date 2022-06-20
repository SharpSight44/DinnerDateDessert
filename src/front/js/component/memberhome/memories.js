import React from "react";
import { MemberNavbar } from "../memberNavbar";
import TitlebarImageList from "../memberhome/memoriescard";

export const Memories = () => {
  return (
    <>
      <MemberNavbar />
      <TitlebarImageList />
      <h1 style={{ fontSize: "33px", color: "white" }}>
        ALL Items from Outings WENT On.. will go here --Think of how to make it
        memorable? upload pictures? Journal experience??{" "}
      </h1>
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
