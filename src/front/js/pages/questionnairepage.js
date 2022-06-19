import React from "react";
import { MemberNavbar } from "../component/memberNavbar";
import Surveyone from "../component/survey";
import "../../styles/survey.css";

export const QuestionnairePage = () => {
  return (
    <>
      <MemberNavbar />
      <div className="surveycss">
        <h1 className="surveytitle">
          Answer A Few Questions To Find Your Perfect Night Out!
        </h1>
        <hr className="surveyline"></hr>
        <Surveyone />
      </div>
    </>
  );
};
