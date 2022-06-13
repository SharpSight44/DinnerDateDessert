import React from "react";
import Google from "../component/memberhome/google";
import { MemberNavbar } from "../component/memberNavbar";

export const Login = () => {
  return (
    <>
      <div className="membernavbar">
        <MemberNavbar />
      </div>
      <div className="Google">
        <Google />
      </div>
    </>
  );
};
