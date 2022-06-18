import React from "react";
import { MemberNavbar } from "../component/memberNavbar";
import { Questionnaire } from "../component/questionnaire";
import Surveyone from "../component/survey";
import "../../styles/survey.css";

export const QuestionnairePage = () => {
  return (
    <>
      <MemberNavbar />
      <div>
        <div className="surveycss">
          <h1 className="surveytitle">
            Answer a few questions to find your perfect night out!
          </h1>
          <Questionnaire />
          <Surveyone />
        </div>
      </div>
    </>
  );
};
