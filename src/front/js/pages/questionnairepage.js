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
          <h1></h1>
          <Questionnaire />
          <Surveyone />
        </div>
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};
