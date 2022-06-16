import React from "react";
import { MemberNavbar } from "../component/memberNavbar";

export const MemberHome = () => {
  return (
    <>
      <div className="membernavbar">
        <MemberNavbar />
      </div>
      <h1 style={{ fontSize: "100px", color: "white" }}>Member Home</h1>
    </>
  );
};
